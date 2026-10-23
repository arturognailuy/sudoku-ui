import hintCase0 from './naked-single.json'; // naked-single
import hintCase1 from './hidden-single.json'; // hidden-single
import hintCase2 from './naked-pair.json'; // naked-pair
import hintCase3 from './naked-triple.json'; // naked-triple
import hintCase4 from './pointing-pair.json'; // pointing-pair
import hintCase5 from './hidden-pair.json'; // hidden-pair
import hintCase6 from './x-wing.json'; // x-wing
import hintCase7 from './xy-wing.json'; // xy-wing
import hintCase8 from './hidden-triple.json'; // hidden-triple
import hintCase9 from './w-wing.json'; // w-wing
import hintCase10 from './swordfish.json'; // swordfish
import hintCase11 from './naked-quad.json'; // naked-quad
import hintCase12 from './simple-coloring.json'; // simple-coloring
import hintCase13 from './hidden-quad.json'; // hidden-quad
import hintCase14 from './xyz-wing.json'; // xyz-wing
import hintCase15 from './jellyfish.json'; // jellyfish
import hintCase16 from './bug-plus-one.json'; // bug-plus-one
import hintCase17 from './unique-rectangle.json'; // unique-rectangle
import hintCase18 from './unique-rectangle-2.json'; // unique-rectangle-2
import hintCase19 from './unique-rectangle-3.json'; // unique-rectangle-3
import hintCase20 from './unique-rectangle-4.json'; // unique-rectangle-4
import hintCase21 from './x-cycles.json'; // x-cycles
import hintCase22 from './xy-chain.json'; // xy-chain

import type { HintPlan } from '../../../src/api/types';

export interface HintFixture {
  strategy: string;
  display_name: string;
  grade: string;
  puzzle: string;
  reached_after: number;
  hint: HintPlan;
}

export const hintPlans = {
  schema_version: 1,
  cases: [
    hintCase0,
    hintCase1,
    hintCase2,
    hintCase3,
    hintCase4,
    hintCase5,
    hintCase6,
    hintCase7,
    hintCase8,
    hintCase9,
    hintCase10,
    hintCase11,
    hintCase12,
    hintCase13,
    hintCase14,
    hintCase15,
    hintCase16,
    hintCase17,
    hintCase18,
    hintCase19,
    hintCase20,
    hintCase21,
    hintCase22,
  ] as HintFixture[],
};
