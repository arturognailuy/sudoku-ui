import { describe, expect, it } from 'vitest';
import { hintPlans as plans } from '../../tests/fixtures/hint-plans';
import type { MessageDescriptor } from '../api/types';
import {
  backendMessageContracts,
  isValidMessageDescriptor,
  presentDescriptor,
} from './backendMessages';

const descriptors: MessageDescriptor[] = [];
const collect = (value: unknown) =>
  descriptors.push(value as MessageDescriptor);
for (const fixture of plans.cases) {
  const hint = fixture.hint;
  collect(hint.title);
  collect(hint.summary);
  if (hint.strategy) {
    collect(hint.strategy.name);
    collect(hint.strategy.grade_name);
  }
  for (const step of hint.steps) {
    collect(step.message);
    for (const chunk of step.narration ?? [])
      if (chunk.kind === 'message') collect(chunk.message);
  }
}

describe('generated backend hint contract', () => {
  it('contains the complete 23-strategy matrix from the final backend exporter', () => {
    expect(plans.schema_version).toBe(1);
    expect(new Set(plans.cases.map(({ strategy }) => strategy)).size).toBe(23);
  });

  it('uses only closed known descriptors for summaries, steps, and narration', () => {
    expect(descriptors.length).toBeGreaterThan(100);
    for (const descriptor of descriptors) {
      expect(isValidMessageDescriptor(descriptor), descriptor.id).toBe(true);
      expect(
        Object.hasOwn(backendMessageContracts, descriptor.id),
        descriptor.id,
      ).toBe(true);
      expect(presentDescriptor(descriptor), descriptor.id).toMatchObject({
        kind: 'known',
      });
    }
  });

  it('contains no literal-text narration compatibility chunks', () => {
    for (const { hint } of plans.cases)
      for (const step of hint.steps)
        for (const chunk of step.narration ?? [])
          expect(['message', 'target', 'digit']).toContain(chunk.kind);
  });
});
