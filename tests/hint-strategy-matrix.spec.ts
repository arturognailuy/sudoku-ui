import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import type { HintPlan } from '../src/api/types';

interface HintFixture {
  strategy: string;
  display_name: string;
  grade: string;
  puzzle: string;
  reached_after: number;
  hint: HintPlan;
}

const fixture = JSON.parse(
  readFileSync(new URL('./fixtures/hint-plans.json', import.meta.url), 'utf8'),
) as { schema_version: number; cases: HintFixture[] };

if (fixture.schema_version !== 1 || fixture.cases.length !== 23) {
  throw new Error('hint fixture must contain schema version 1 and 23 cases');
}

const gridFromPuzzle = (puzzle: string) =>
  Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 9 }, (_, column) => {
      const value = puzzle[row * 9 + column];
      return value === '.' ? 0 : Number(value);
    }),
  );
const emptyBooleanGrid = () =>
  Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false));
const emptyDigitSetGrid = () =>
  Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => [] as number[]),
  );

const mockHintCase = async (page: Page, hintCase: HintFixture) => {
  const givens = gridFromPuzzle(hintCase.puzzle);
  const values = gridFromPuzzle(hintCase.puzzle);
  const candidates = emptyDigitSetGrid();
  for (const step of hintCase.hint.steps) {
    for (const mark of step.marks) {
      const { target } = mark;
      if (
        target.kind === 'candidate' &&
        target.row &&
        target.column &&
        target.value &&
        !candidates[target.row - 1]![target.column - 1]!.includes(target.value)
      ) {
        candidates[target.row - 1]![target.column - 1]!.push(target.value);
      }
    }
  }
  const snapshot = (canUndo: boolean) => ({
    givens,
    values,
    invalid: emptyBooleanGrid(),
    candidates,
    mistakes: 0,
    status: 'in-progress',
    can_undo: canUndo,
    can_redo: false,
  });
  let appliedPlanId = '';

  await page.route('**/healthz', (route) =>
    route.fulfill({ json: { status: 'healthy' } }),
  );
  await page.route('**/api/v1/account', (route) =>
    route.fulfill({
      status: 401,
      json: {
        error: {
          code: 'unauthenticated',
          message: {
            id: 'error.account-unauthorized',
            arguments: [],
            text: 'Sign in required.',
          },
        },
      },
    }),
  );
  await page.route('**/api/v1/guest/games', (route) =>
    route.fulfill({
      status: 201,
      json: {
        document: 'sealed-0',
        revision: 0,
        actual_difficulty: hintCase.grade,
        snapshot: snapshot(false),
      },
    }),
  );
  await page.route('**/api/v1/guest/games/hint', (route) =>
    route.fulfill({ json: { revision: 0, hint: hintCase.hint } }),
  );
  await page.route('**/api/v1/guest/games/actions', async (route) => {
    const request = route.request().postDataJSON() as {
      action: { kind: string; plan_id?: string; expected_revision: number };
    };
    expect(request.action).toEqual({
      kind: 'apply-hint',
      plan_id: hintCase.hint.plan_id,
      expected_revision: 0,
    });
    appliedPlanId = request.action.plan_id ?? '';
    const placement = hintCase.hint.conclusion.placement;
    if (placement)
      values[placement.row - 1]![placement.column - 1] = placement.value;
    await route.fulfill({
      json: {
        document: 'sealed-1',
        revision: 1,
        actual_difficulty: hintCase.grade,
        snapshot: snapshot(true),
        result: {
          action: 'apply-hint',
          changes: [],
          status: 'in-progress',
          can_undo: true,
          can_redo: false,
        },
      },
    });
  });
  return () => appliedPlanId;
};

test.describe.configure({ mode: 'parallel' });

for (const hintCase of fixture.cases) {
  test(`${hintCase.strategy} renders every teaching step and applies its exact plan`, async ({
    page,
  }, testInfo) => {
    const appliedPlanId = await mockHintCase(page, hintCase);
    await page.goto('./');
    await page.getByRole('button', { name: 'Start Easy puzzle' }).click();
    await page.getByRole('button', { name: 'Reveal a hint' }).click();

    await expect(
      page.getByRole('heading', { name: hintCase.display_name }),
    ).toBeVisible();
    await expect(
      page
        .locator('.hint-strategy-reveal')
        .getByText(`${hintCase.grade} strategy`, { exact: false }),
    ).toBeVisible();

    for (const [index, step] of hintCase.hint.steps.entries()) {
      const finalStep = index === hintCase.hint.steps.length - 1;
      await expect(
        page.getByText(`Step ${index + 1} of ${hintCase.hint.steps.length}`),
      ).toBeVisible();
      expect(step.narration?.length).toBeGreaterThan(0);
      const targets = step.narration!.filter(
        (chunk) => chunk.kind === 'target' && chunk.target,
      );
      await expect(page.locator('.hint-narration__target')).toHaveCount(
        targets.length,
      );
      await expect(page.locator('.hint-narration__locator')).toHaveCount(
        targets.length,
      );
      await expect(
        page.locator('.hint-step .hint-narration--structured'),
      ).toBeVisible();
      await expect(
        page.locator('.hint-step .hint-narration--fallback'),
      ).toHaveCount(0);
      await expect(
        page
          .locator('.hint-strategy-reveal')
          .getByText(`${hintCase.grade} strategy`, { exact: false }),
      ).toBeVisible();
      if (step.links.length > 0) {
        await expect(page.locator('.hint-link')).toHaveCount(step.links.length);
        await expect(
          page.getByRole('list', { name: 'Visual hint legend' }),
        ).toBeVisible();
      }
      if (hintCase.strategy === 'xy-wing') {
        expect(step.links).toHaveLength(index === 0 ? 1 : 2);
        expect(step.links.every(({ kind }) => kind === 'implication')).toBe(
          true,
        );
      }
      if (hintCase.strategy === 'w-wing') {
        expect(step.links).toHaveLength(1);
        expect(step.links[0]?.kind).toBe('strong');
      }
      if (step.nodes.some(({ order }) => order)) {
        await expect(page.locator('.hint-node text').first()).toBeVisible();
      }
      if (step.nodes.some(({ group }) => group === 'B')) {
        const candidateCoverage = await page.evaluate((expectedNodes) => {
          const labels = Array.from(
            document.querySelectorAll<SVGTextElement>('.hint-node text'),
          );
          return expectedNodes.map((expected, index) => {
            const candidate = document.querySelector<HTMLElement>(
              `[data-cell="${expected.target.row - 1}-${expected.target.column - 1}"] .cell-notes > span:nth-child(${expected.target.value})`,
            );
            const digit =
              candidate?.querySelector<HTMLElement>('.cell-note__digit');
            const label = labels[index];
            if (!candidate || !digit || !label) return null;
            const candidateBox = candidate.getBoundingClientRect();
            const digitBox = digit.getBoundingClientRect();
            const labelBox = label.getBoundingClientRect();
            const ringStyle = getComputedStyle(candidate, '::after');
            const ringSize = Number.parseFloat(ringStyle.width);
            const centerX = (candidateBox.left + candidateBox.right) / 2;
            const centerY = (candidateBox.top + candidateBox.bottom) / 2;
            const ring = {
              left: centerX - ringSize / 2,
              right: centerX + ringSize / 2,
              top: centerY - ringSize / 2,
              bottom: centerY + ringSize / 2,
            };
            return {
              centered:
                Math.abs(centerX - (digitBox.left + digitBox.right) / 2) <= 1 &&
                Math.abs(centerY - (digitBox.top + digitBox.bottom) / 2) <= 1,
              covered:
                ring.left <= digitBox.left &&
                ring.right >= digitBox.right &&
                ring.top <= digitBox.top &&
                ring.bottom >= digitBox.bottom,
              labelClear:
                labelBox.right <= ring.left ||
                labelBox.left >= ring.right ||
                labelBox.bottom <= ring.top ||
                labelBox.top >= ring.bottom,
              borderWidth: ringStyle.borderTopWidth,
              borderStyle: ringStyle.borderTopStyle,
            };
          });
        }, step.nodes);
        expect(candidateCoverage).not.toContain(null);
        expect(candidateCoverage.every((result) => result?.centered)).toBe(
          true,
        );
        expect(candidateCoverage.every((result) => result?.covered)).toBe(true);
        expect(candidateCoverage.every((result) => result?.labelClear)).toBe(
          true,
        );
        expect(
          candidateCoverage.every(
            (result) =>
              result?.borderWidth === '2px' && result.borderStyle === 'solid',
          ),
        ).toBe(true);
      }
      if (
        finalStep &&
        [
          'naked-single',
          'hidden-single',
          'naked-pair',
          'pointing-pair',
          'x-wing',
          'simple-coloring',
          'unique-rectangle',
          'xy-wing',
          'w-wing',
          'xy-chain',
        ].includes(hintCase.strategy)
      ) {
        await page.screenshot({
          path: testInfo.outputPath(
            `${hintCase.strategy}-structured-narration.png`,
          ),
          fullPage: true,
        });
        await page.setViewportSize({ width: 390, height: 844 });
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await expect(page.locator('.hint-panel')).toBeVisible();
        if (
          hintCase.strategy === 'xy-chain' ||
          hintCase.strategy === 'xy-wing'
        ) {
          const arrowMarker = page.locator('#hint-arrow');
          await expect(arrowMarker).toHaveAttribute(
            'markerUnits',
            'userSpaceOnUse',
          );
          const markerSize = await arrowMarker.evaluate((marker) => ({
            width: Number(marker.getAttribute('markerWidth')),
            height: Number(marker.getAttribute('markerHeight')),
          }));
          expect(markerSize.width).toBeGreaterThan(0);
          expect(markerSize.width).toBeLessThanOrEqual(0.25);
          expect(markerSize.height).toBeGreaterThan(0);
          expect(markerSize.height).toBeLessThanOrEqual(0.25);
        }
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        ).toBe(true);
        await page.screenshot({
          path: testInfo.outputPath(
            `${hintCase.strategy}-structured-narration-phone.png`,
          ),
          fullPage: true,
        });
      }
      for (const mark of step.marks) {
        const targetClass =
          mark.target.kind === 'candidate'
            ? `.cell-note--hint-${mark.role}`
            : `.game-cell--hint-${mark.role}`;
        await expect(page.locator(targetClass).first()).toBeVisible();
      }
      if (index < hintCase.hint.steps.length - 1) {
        await page.getByRole('button', { name: 'Next' }).click();
      }
    }

    await page.getByRole('button', { name: 'Apply hint' }).click();
    await expect.poll(appliedPlanId).toBe(hintCase.hint.plan_id);
    await expect(page.getByRole('button', { name: 'Undo' })).toBeEnabled();
  });
}
