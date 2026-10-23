import { readFileSync } from 'node:fs';
import type { HintPlan } from '../../src/api/types';

export interface HintFixture {
  strategy: string;
  display_name: string;
  grade: string;
  puzzle: string;
  reached_after: number;
  hint: HintPlan;
}

interface HintFixtureManifest {
  schema_version: number;
  cases: { strategy: string; file: string }[];
}

export const loadHintPlans = () => {
  const directory = new URL('./hint-plans/', import.meta.url);
  const manifest = JSON.parse(
    readFileSync(new URL('manifest.json', directory), 'utf8'),
  ) as HintFixtureManifest;
  if (manifest.schema_version !== 1 || manifest.cases.length !== 23) {
    throw new Error(
      'hint fixture manifest must contain schema version 1 and 23 cases',
    );
  }
  const seen = new Set<string>();
  const cases = manifest.cases.map(({ strategy, file }) => {
    if (
      seen.has(strategy) ||
      file !== `${strategy}.json` ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(file)
    ) {
      throw new Error(`invalid hint fixture manifest entry: ${strategy}`);
    }
    seen.add(strategy);
    const hintCase = JSON.parse(
      readFileSync(new URL(file, directory), 'utf8'),
    ) as HintFixture;
    if (hintCase.strategy !== strategy) {
      throw new Error(`hint fixture strategy mismatch: ${strategy}`);
    }
    return hintCase;
  });
  return { schema_version: manifest.schema_version, cases };
};
