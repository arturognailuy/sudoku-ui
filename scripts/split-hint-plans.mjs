import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { format } from 'prettier';

const [inputPath, outputPath = 'tests/fixtures/hint-plans'] =
  process.argv.slice(2);
if (!inputPath) {
  throw new Error(
    'usage: node scripts/split-hint-plans.mjs <hint-plans.json> [output-directory]',
  );
}

const fixture = JSON.parse(await readFile(resolve(inputPath), 'utf8'));
if (fixture.schema_version !== 1 || !Array.isArray(fixture.cases)) {
  throw new Error(
    'hint fixture must contain schema version 1 and a cases array',
  );
}

const strategies = new Set();
const cases = fixture.cases.map((hintCase) => {
  const strategy = hintCase?.strategy;
  if (
    typeof strategy !== 'string' ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(strategy) ||
    strategies.has(strategy)
  ) {
    throw new Error(`invalid or duplicate hint strategy: ${String(strategy)}`);
  }
  strategies.add(strategy);
  return { strategy, file: `${strategy}.json`, hintCase };
});
if (cases.length !== 23) {
  throw new Error(`hint fixture must contain 23 cases, found ${cases.length}`);
}

const outputDirectory = resolve(outputPath);
await mkdir(outputDirectory, { recursive: true });
for (const { file, hintCase } of cases) {
  await writeFile(
    resolve(outputDirectory, file),
    await format(JSON.stringify(hintCase), { parser: 'json' }),
  );
}
await writeFile(
  resolve(outputDirectory, 'manifest.json'),
  await format(
    JSON.stringify({
      schema_version: fixture.schema_version,
      cases: cases.map(({ strategy, file }) => ({ strategy, file })),
    }),
    { parser: 'json' },
  ),
);
const imports = cases.map(
  ({ strategy, file }, index) =>
    `import hintCase${index} from './${file}'; // ${strategy}`,
);
await writeFile(
  resolve(outputDirectory, 'index.ts'),
  await format(
    `${imports.join('\n')}\n\n` +
      `import type { HintPlan } from '../../../src/api/types';\n\n` +
      `export interface HintFixture {\n` +
      `  strategy: string;\n  display_name: string;\n  grade: string;\n` +
      `  puzzle: string;\n  reached_after: number;\n  hint: HintPlan;\n}\n\n` +
      `export const hintPlans = {\n` +
      `  schema_version: ${fixture.schema_version},\n` +
      `  cases: [${cases.map((_, index) => `hintCase${index}`).join(', ')}] as HintFixture[],\n` +
      `};\n`,
    { parser: 'typescript', singleQuote: true },
  ),
);
console.log(
  `wrote ${cases.length} hint cases to ${basename(outputDirectory)}/`,
);
