import { describe, expect, it } from 'vitest';
import { backendMessageContracts, presentDescriptor } from './backendMessages';
import { sourceMessages } from './catalogs';
import { message } from './messages';

describe('backend message descriptors', () => {
  it('keeps every backend-owned contract in the production catalogs', () => {
    for (const id of Object.keys(backendMessageContracts))
      expect(Object.hasOwn(sourceMessages, id), id).toBe(true);
  });

  it('formats a known descriptor only with its closed typed arguments', () => {
    expect(
      presentDescriptor({
        id: 'hint.strategy.summary',
        arguments: [
          { name: 'steps', kind: 'count', count: 3 },
          { name: 'strategy', kind: 'strategy', strategy: 'hidden-single' },
        ],
        text: 'ignored known fallback',
      }),
    ).toEqual({
      kind: 'known',
      reference: message('hint.strategy.summary', {
        steps: 3,
        strategy: message('strategy.hidden-single.name'),
      }),
    });
  });

  it('preserves grouped semantic values for locale-aware list formatting', () => {
    expect(
      presentDescriptor({
        id: 'hint.subset-reservation.observe',
        arguments: [
          {
            name: 'unit',
            kind: 'units',
            units: [{ kind: 'row', index: 4 }],
          },
          {
            name: 'cells',
            kind: 'cells',
            cells: [
              { row: 4, column: 2 },
              { row: 4, column: 7 },
            ],
          },
          { name: 'digits', kind: 'digits', digits: [2, 7] },
        ],
        text: 'ignored known fallback',
      }),
    ).toEqual({
      kind: 'known',
      reference: message('hint.subset-reservation.observe', {
        unit: {
          kind: 'list',
          items: [
            message('hint.target.unit.accessible', {
              kind: message('hint.target.row'),
              index: 4,
            }),
          ],
        },
        cells: {
          kind: 'list',
          items: [
            message('hint.target.cell.accessible', { row: 4, column: 2 }),
            message('hint.target.cell.accessible', { row: 4, column: 7 }),
          ],
        },
        digits: {
          kind: 'list',
          items: [
            message('hint.argument.digit', { digit: 2 }),
            message('hint.argument.digit', { digit: 7 }),
          ],
        },
      }),
    });
  });

  it('uses bounded English fallback only for an unknown valid ID', () => {
    expect(
      presentDescriptor({
        id: 'hint.future.summary',
        arguments: [],
        text: 'A bounded future explanation.',
      }),
    ).toEqual({ kind: 'unknown', text: 'A bounded future explanation.' });
  });

  it.each([
    null,
    { id: 'hint.strategy.summary', arguments: [], text: 'missing arguments' },
    {
      id: 'hint.strategy.summary',
      arguments: [
        { name: 'strategy', kind: 'strategy', strategy: 'hidden-single' },
        { name: 'steps', kind: 'count', count: 3 },
      ],
      text: 'wrong order',
    },
    {
      id: 'hint.strategy.summary',
      arguments: [
        { name: 'steps', kind: 'count', count: -1 },
        { name: 'strategy', kind: 'strategy', strategy: 'hidden-single' },
      ],
      text: 'invalid value',
    },
    { id: 'hint.future.summary', arguments: [], text: '' },
    {
      id: 'hint.future.summary',
      arguments: [{ name: 'cell', kind: 'cell' }],
      text: 'missing nested value',
    },
    {
      id: 'hint.future.summary',
      arguments: [{ name: 'candidate', kind: 'candidate', candidate: null }],
      text: 'null nested value',
    },
  ])('maps a malformed descriptor to localized generic failure', (value) => {
    expect(presentDescriptor(value)).toEqual({
      kind: 'malformed',
      reference: message('error.malformedDescriptor'),
    });
  });
});
