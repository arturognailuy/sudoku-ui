import type {
  MessageArgument,
  MessageDescriptor,
  HintTarget,
} from '../api/types';
import type { MessageId } from './catalogs';
import {
  difficultyMessageIds,
  strategyMessageIds,
  type MessageReference,
} from './localization';
import { message, type DisplayMessage } from './messages';

export type BackendArgumentKind = MessageArgument['kind'];

export const backendMessageContracts = {
  'difficulty.easy.name': [],
  'difficulty.medium.name': [],
  'difficulty.hard.name': [],
  'difficulty.expert.name': [],
  'difficulty.evil.name': [],
  'strategy.naked-single.name': [],
  'strategy.hidden-single.name': [],
  'strategy.naked-pair.name': [],
  'strategy.naked-triple.name': [],
  'strategy.pointing-pair.name': [],
  'strategy.hidden-pair.name': [],
  'strategy.x-wing.name': [],
  'strategy.xy-wing.name': [],
  'strategy.hidden-triple.name': [],
  'strategy.w-wing.name': [],
  'strategy.swordfish.name': [],
  'strategy.naked-quad.name': [],
  'strategy.simple-coloring.name': [],
  'strategy.hidden-quad.name': [],
  'strategy.xyz-wing.name': [],
  'strategy.jellyfish.name': [],
  'strategy.bug-plus-one.name': [],
  'strategy.unique-rectangle.name': [],
  'strategy.unique-rectangle-2.name': [],
  'strategy.unique-rectangle-3.name': [],
  'strategy.unique-rectangle-4.name': [],
  'strategy.x-cycles.name': [],
  'strategy.xy-chain.name': [],
  'strategy.backtracker.name': [],
  'hint.value-correction.title': [],
  'hint.candidate-correction.title': [],
  'hint.value-correction.summary': [['cell', 'cell']],
  'hint.candidate-correction.summary': [['cell', 'cell']],
  'hint.strategy.summary': [
    ['steps', 'count'],
    ['strategy', 'strategy'],
  ],
  'hint.value-correction.observe': [['cell', 'cell']],
  'hint.value-correction.conclude': [['cell', 'cell']],
  'hint.candidate-correction.observe': [['cell', 'cell']],
  'hint.candidate-correction.compare': [],
  'hint.candidate-correction.conclude': [['cell', 'cell']],
  'hint.strategy.observe': [],
  'hint.strategy.compare': [],
  'hint.strategy.conclude': [['strategy', 'strategy']],
  'hint.coloring.pair': [
    ['unit', 'units'],
    ['digit', 'digit'],
    ['cells', 'cells'],
  ],
  'hint.coloring.chain': [
    ['digit', 'digit'],
    ['group_a', 'cells'],
    ['group_b', 'cells'],
  ],
  'hint.coloring.alternatives': [['digit', 'digit']],
  'hint.coloring.elimination': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['group_a_cell', 'cell'],
    ['group_b_cell', 'cell'],
  ],
  'hint.coloring.apply': [
    ['candidates', 'candidates'],
    ['colored_digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.coloring.place': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['colored_digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.x-cycle.opening': [
    ['unit', 'units'],
    ['digit', 'digit'],
    ['cells', 'cells'],
  ],
  'hint.x-cycle.assume': [
    ['start', 'cell'],
    ['forced', 'cell'],
    ['blocked', 'cell'],
    ['unit', 'units'],
    ['result', 'cell'],
    ['digit', 'digit'],
  ],
  'hint.x-cycle.follow': [
    ['true_cell', 'cell'],
    ['blocked', 'cell'],
    ['unit', 'units'],
    ['result', 'cell'],
    ['digit', 'digit'],
  ],
  'hint.x-cycle.close': [
    ['true_cell', 'cell'],
    ['blocked', 'cell'],
    ['unit', 'units'],
    ['result', 'cell'],
    ['digit', 'digit'],
  ],
  'hint.x-cycle.place': [
    ['assumption', 'cell'],
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.xy-chain.start': [
    ['cell', 'cell'],
    ['first_digit', 'digit'],
    ['second_digit', 'digit'],
    ['endpoint_digit', 'digit'],
    ['other_digit', 'digit'],
  ],
  'hint.xy-chain.assume': [
    ['start', 'cell'],
    ['endpoint_digit', 'digit'],
    ['start_value', 'digit'],
    ['middle', 'cell'],
    ['middle_value', 'digit'],
    ['result', 'cell'],
    ['result_value', 'digit'],
    ['first_unit', 'units'],
    ['second_unit', 'units'],
  ],
  'hint.xy-chain.follow': [
    ['start', 'cell'],
    ['start_value', 'digit'],
    ['middle', 'cell'],
    ['middle_value', 'digit'],
    ['result', 'cell'],
    ['result_value', 'digit'],
    ['first_unit', 'units'],
    ['second_unit', 'units'],
  ],
  'hint.xy-chain.reach': [
    ['start', 'cell'],
    ['start_value', 'digit'],
    ['endpoint', 'cell'],
    ['shared_digit', 'digit'],
    ['endpoint_digit', 'digit'],
  ],
  'hint.xy-chain.place': [
    ['first_endpoint', 'cell'],
    ['second_endpoint', 'cell'],
    ['endpoint_digit', 'digit'],
    ['cell', 'cell'],
    ['digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.naked-single.constraints': [
    ['cell', 'cell'],
    ['excluded_digits', 'digits'],
  ],
  'hint.naked-single.only': [
    ['cell', 'cell'],
    ['digit', 'digit'],
  ],
  'hint.naked-single.apply': [
    ['cell', 'cell'],
    ['digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.hidden-single.inspect': [
    ['unit', 'units'],
    ['digit', 'digit'],
  ],
  'hint.hidden-single.blockers': [
    ['blockers', 'cells'],
    ['digit', 'digit'],
    ['unit', 'units'],
  ],
  'hint.hidden-single.only': [
    ['cell', 'cell'],
    ['digit', 'digit'],
  ],
  'hint.hidden-single.apply': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.naked-pair.inspect': [
    ['unit', 'units'],
    ['cell', 'cell'],
    ['first_digit', 'digit'],
    ['second_digit', 'digit'],
  ],
  'hint.naked-pair.match': [
    ['cell', 'cell'],
    ['first_digit', 'digit'],
    ['second_digit', 'digit'],
  ],
  'hint.naked-pair.reserve': [
    ['digits', 'digits'],
    ['digit', 'digit'],
    ['unit', 'units'],
  ],
  'hint.naked-pair.apply': [
    ['candidates', 'candidates'],
    ['strategy', 'strategy'],
  ],
  'hint.naked-triple.first': [
    ['unit', 'units'],
    ['cell', 'cell'],
    ['first_digit', 'digit'],
    ['second_digit', 'digit'],
  ],
  'hint.naked-triple.second': [
    ['cell', 'cell'],
    ['first_digit', 'digit'],
    ['second_digit', 'digit'],
  ],
  'hint.naked-triple.third': [
    ['cell', 'cell'],
    ['first_digit', 'digit'],
    ['second_digit', 'digit'],
    ['reserved_digits', 'digits'],
  ],
  'hint.naked-triple.consequence': [
    ['reserved_digits', 'digits'],
    ['removed_digits', 'digits'],
    ['cell', 'cell'],
    ['remaining_digit', 'digit'],
  ],
  'hint.naked-triple.apply': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.subset-reservation.observe': [
    ['unit', 'units'],
    ['cells', 'cells'],
    ['digits', 'digits'],
  ],
  'hint.subset-reservation.explain': [
    ['unit', 'units'],
    ['cells', 'cells'],
    ['digits', 'digits'],
  ],
  'hint.subset-reservation.apply': [
    ['candidates', 'candidates'],
    ['strategy', 'strategy'],
  ],
  'hint.subset-reservation.place': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.hidden-subset-confinement.observe': [
    ['unit', 'units'],
    ['digits', 'digits'],
    ['cells', 'cells'],
  ],
  'hint.hidden-subset-confinement.explain': [
    ['digits', 'digits'],
    ['unit', 'units'],
    ['cells', 'cells'],
  ],
  'hint.hidden-subset-confinement.apply': [
    ['candidates', 'candidates'],
    ['strategy', 'strategy'],
  ],
  'hint.hidden-subset-confinement.place': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.hidden-pair.first': [
    ['unit', 'units'],
    ['digit', 'digit'],
    ['cells', 'cells'],
  ],
  'hint.hidden-pair.second': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['digits', 'digits'],
  ],
  'hint.hidden-pair.consequence': [
    ['digits', 'digits'],
    ['candidates', 'candidates'],
  ],
  'hint.hidden-pair.apply': [
    ['candidates', 'candidates'],
    ['strategy', 'strategy'],
  ],
  'hint.hidden-triple.first': [
    ['unit', 'units'],
    ['digit', 'digit'],
    ['cells', 'cells'],
  ],
  'hint.hidden-triple.second': [
    ['unit', 'units'],
    ['digits', 'digits'],
    ['cells', 'cells'],
  ],
  'hint.hidden-triple.third': [
    ['unit', 'units'],
    ['digits', 'digits'],
    ['cells', 'cells'],
  ],
  'hint.hidden-triple.consequence': [
    ['digits', 'digits'],
    ['unit', 'units'],
  ],
  'hint.hidden-triple.apply': [
    ['candidates', 'candidates'],
    ['strategy', 'strategy'],
  ],
  'hint.pointing-pair.first': [
    ['source_unit', 'units'],
    ['digit', 'digit'],
    ['cell', 'cell'],
  ],
  'hint.pointing-pair.second': [
    ['digit', 'digit'],
    ['source_unit', 'units'],
    ['cell', 'cell'],
    ['intersection_unit', 'units'],
  ],
  'hint.pointing-pair.consequence': [
    ['digit', 'digit'],
    ['source_unit', 'units'],
    ['intersection_unit', 'units'],
    ['candidate', 'candidate'],
  ],
  'hint.pointing-pair.apply': [
    ['cell', 'cell'],
    ['digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.intersection-confinement.observe': [
    ['source_unit', 'units'],
    ['digit', 'digit'],
    ['intersection_unit', 'units'],
    ['cells', 'cells'],
  ],
  'hint.intersection-confinement.explain': [
    ['digit', 'digit'],
    ['source_unit', 'units'],
    ['intersection_unit', 'units'],
  ],
  'hint.intersection-confinement.apply': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.intersection-confinement.place': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.fish-confinement.observe': [
    ['base_units', 'units'],
    ['digit', 'digit'],
    ['cover_units', 'units'],
  ],
  'hint.fish-confinement.explain': [
    ['base_units', 'units'],
    ['cover_units', 'units'],
    ['digit', 'digit'],
  ],
  'hint.swordfish.consequence': [
    ['base_units', 'units'],
    ['cover_units', 'units'],
    ['digit', 'digit'],
  ],
  'hint.fish-confinement.apply': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.x-wing.first': [
    ['base_unit', 'units'],
    ['digit', 'digit'],
    ['cover_units', 'units'],
  ],
  'hint.x-wing.second': [
    ['base_unit', 'units'],
    ['digit', 'digit'],
    ['cover_units', 'units'],
  ],
  'hint.x-wing.consequence': [
    ['base_units', 'units'],
    ['cover_units', 'units'],
    ['digit', 'digit'],
  ],
  'hint.x-wing.apply': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.pivot-wing.observe': [
    ['pivot', 'cell'],
    ['pivot_digits', 'digits'],
    ['wing_cells', 'cells'],
  ],
  'hint.pivot-wing.explain': [
    ['shared_digit', 'digit'],
    ['pivot', 'cell'],
    ['wing_cells', 'cells'],
  ],
  'hint.xy-wing.pivot': [
    ['pivot', 'cell'],
    ['digits', 'digits'],
  ],
  'hint.xy-wing.case': [
    ['pivot', 'cell'],
    ['pivot_digit', 'digit'],
    ['wing', 'cell'],
    ['shared_digit', 'digit'],
  ],
  'hint.xy-wing.guarantee': [
    ['pivot', 'cell'],
    ['wing_cells', 'cells'],
    ['shared_digit', 'digit'],
  ],
  'hint.xy-wing.apply': [
    ['cells', 'cells'],
    ['wing_cells', 'cells'],
    ['shared_digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.xy-wing.place': [
    ['cell', 'cell'],
    ['wing_cells', 'cells'],
    ['shared_digit', 'digit'],
    ['digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.xyz-wing.pivot': [
    ['pivot', 'cell'],
    ['digits', 'digits'],
  ],
  'hint.xyz-wing.case': [
    ['pivot', 'cell'],
    ['pivot_digit', 'digit'],
    ['wing', 'cell'],
    ['unit', 'units'],
    ['shared_digit', 'digit'],
  ],
  'hint.xyz-wing.pivot-case': [
    ['pivot', 'cell'],
    ['shared_digit', 'digit'],
  ],
  'hint.xyz-wing.guarantee': [
    ['pivot', 'cell'],
    ['pattern_cells', 'cells'],
    ['shared_digit', 'digit'],
  ],
  'hint.xyz-wing.apply': [
    ['target', 'cell'],
    ['first_pattern_cell', 'cell'],
    ['first_unit', 'units'],
    ['second_pattern_cell', 'cell'],
    ['second_unit', 'units'],
    ['third_pattern_cell', 'cell'],
    ['third_unit', 'units'],
    ['shared_digit', 'digit'],
    ['strategy', 'strategy'],
  ],
  'hint.strong-link-wing.observe': [
    ['wing_cells', 'cells'],
    ['digits', 'digits'],
  ],
  'hint.strong-link-wing.bridge': [
    ['unit', 'units'],
    ['link_digit', 'digit'],
    ['link_cells', 'cells'],
  ],
  'hint.strong-link-wing.force': [
    ['link_digit', 'digit'],
    ['first_link_cell', 'cell'],
    ['first_wing_cell', 'cell'],
    ['second_link_cell', 'cell'],
    ['second_wing_cell', 'cell'],
    ['forced_digit', 'digit'],
  ],
  'hint.strong-link-wing.apply': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['wing_cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.strong-link-wing.place': [
    ['removed_digit', 'digit'],
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['wing_cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.relational-wing.apply': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.relational-wing.place': [
    ['removed_digit', 'digit'],
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.bug-plus-one.observe': [
    ['cell', 'cell'],
    ['digits', 'digits'],
  ],
  'hint.bug-plus-one.explain': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['units', 'units'],
  ],
  'hint.bug-plus-one.place': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.unique-rectangle.observe': [
    ['cells', 'cells'],
    ['digits', 'digits'],
  ],
  'hint.unique-rectangle.type1': [
    ['cell', 'cell'],
    ['digits', 'digits'],
  ],
  'hint.unique-rectangle.type2': [
    ['cells', 'cells'],
    ['digit', 'digit'],
  ],
  'hint.unique-rectangle.type3': [
    ['digits', 'digits'],
    ['cells', 'cells'],
    ['unit', 'units'],
  ],
  'hint.unique-rectangle.type4': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['unit', 'units'],
    ['removed_digit', 'digit'],
  ],
  'hint.unique-rectangle.apply': [
    ['candidates', 'candidates'],
    ['strategy', 'strategy'],
  ],
  'hint.unique-rectangle.place': [
    ['digit', 'digit'],
    ['cell', 'cell'],
    ['strategy', 'strategy'],
  ],
  'hint.implication-chain.observe': [
    ['cell', 'cells'],
    ['digits', 'digits'],
  ],
  'hint.implication-chain.explain': [
    ['from', 'candidate'],
    ['to', 'candidate'],
  ],
  'hint.implication-chain.apply': [
    ['digit', 'digit'],
    ['cells', 'cells'],
    ['strategy', 'strategy'],
  ],
  'hint.narration.apply': [],
  'hint.narration.look-at': [],
  'hint.narration.value-conflict': [],
  'hint.narration.clear-value': [],
  'hint.narration.clear-value-tail': [],
  'hint.narration.candidate-inconsistent': [],
  'hint.narration.reset-candidates': [],
  'hint.narration.reset-candidates-tail': [],
  'hint.narration.only-candidate': [],
  'hint.narration.period': [],
  'hint.narration.no-other-digit': [],
  'hint.narration.place': [],
  'hint.narration.naked-single-tail': [],
  'hint.narration.in-unit': [],
  'hint.narration.consider-digit': [],
  'hint.narration.can-appear': [],
  'hint.narration.other-cells': [],
  'hint.narration.cannot-contain': [],
  'hint.narration.leaving-only': [],
  'hint.narration.because-unit': [],
  'hint.narration.still-needs': [],
  'hint.narration.only-cell': [],
  'hint.narration.hidden-single-tail': [],
  'hint.narration.hidden-single-name': [],
  'hint.narration.place-result': [],
  'hint.narration.in': [],
  'hint.narration.remove': [],
  'hint.narration.from': [],
  'hint.narration.separator': [],
  'hint.narration.strategy-result': [['strategy', 'strategy']],
  'error.invalid-request': [],
  'error.invalid-json': [],
  'error.unsupported-media-type': [],
  'error.payload-too-large': [],
  'error.unauthorized': [],
  'error.forbidden-origin': [],
  'error.session-not-found': [],
  'error.revision-conflict': [],
  'error.invalid-session': [],
  'error.invalid-action': [],
  'error.invalid-cell': [],
  'error.immutable-cell': [],
  'error.note-not-allowed': [],
  'error.no-undo': [],
  'error.no-redo': [],
  'error.no-hint': [],
  'error.stale-hint': [],
  'error.persistence-failed': [],
  'error.internal-error': [],
  'error.account-unavailable': [],
  'error.account-unauthorized': [],
  'error.csrf-failed': [],
  'error.account-game-not-found': [],
  'error.guest-revision-conflict': [],
  'error.guest-claim-conflict': [],
} as const satisfies Record<
  string,
  readonly (readonly [string, BackendArgumentKind])[]
>;

export type BackendMessageId = keyof typeof backendMessageContracts;

const boundedText = (value: unknown, maximum: number) =>
  typeof value === 'string' && value.length > 0 && value.length <= maximum;
const gridIndex = (value: unknown) =>
  typeof value === 'number' &&
  Number.isInteger(value) &&
  value >= 1 &&
  value <= 9;
const nonnegativeInteger = (value: unknown) =>
  typeof value === 'number' && Number.isInteger(value) && value >= 0;
const exactKeys = (value: unknown, keys: readonly string[]) =>
  typeof value === 'object' &&
  value !== null &&
  Object.keys(value).sort().join(',') === [...keys].sort().join(',');

const validArgument = (argument: MessageArgument): boolean => {
  if (
    !argument ||
    typeof argument !== 'object' ||
    !boundedText(argument.name, 100)
  )
    return false;
  if (argument.kind === 'text')
    return (
      exactKeys(argument, ['name', 'kind', 'text']) &&
      boundedText(argument.text, 1000)
    );
  if (argument.kind === 'integer')
    return (
      exactKeys(argument, ['name', 'kind', 'integer']) &&
      Number.isInteger(argument.integer)
    );
  if (argument.kind === 'digit')
    return (
      exactKeys(argument, ['name', 'kind', 'digit']) &&
      gridIndex(argument.digit)
    );
  if (argument.kind === 'cell')
    return (
      exactKeys(argument, ['name', 'kind', 'cell']) &&
      exactKeys(argument.cell, ['row', 'column']) &&
      gridIndex(argument.cell.row) &&
      gridIndex(argument.cell.column)
    );
  if (argument.kind === 'candidate')
    return (
      exactKeys(argument, ['name', 'kind', 'candidate']) &&
      exactKeys(argument.candidate, ['cell', 'digit']) &&
      exactKeys(argument.candidate.cell, ['row', 'column']) &&
      gridIndex(argument.candidate.cell.row) &&
      gridIndex(argument.candidate.cell.column) &&
      gridIndex(argument.candidate.digit)
    );
  if (argument.kind === 'row')
    return (
      exactKeys(argument, ['name', 'kind', 'row']) && gridIndex(argument.row)
    );
  if (argument.kind === 'column')
    return (
      exactKeys(argument, ['name', 'kind', 'column']) &&
      gridIndex(argument.column)
    );
  if (argument.kind === 'box')
    return (
      exactKeys(argument, ['name', 'kind', 'box']) && gridIndex(argument.box)
    );
  if (argument.kind === 'difficulty')
    return (
      exactKeys(argument, ['name', 'kind', 'difficulty']) &&
      Object.hasOwn(difficultyMessageIds, argument.difficulty)
    );
  if (argument.kind === 'strategy')
    return (
      exactKeys(argument, ['name', 'kind', 'strategy']) &&
      Object.hasOwn(strategyMessageIds, argument.strategy)
    );
  if (argument.kind === 'count')
    return (
      exactKeys(argument, ['name', 'kind', 'count']) &&
      nonnegativeInteger(argument.count)
    );
  if (argument.kind === 'digits')
    return (
      exactKeys(argument, ['name', 'kind', 'digits']) &&
      Array.isArray(argument.digits) &&
      argument.digits.length >= 1 &&
      argument.digits.length <= 32 &&
      argument.digits.every(gridIndex)
    );
  if (argument.kind === 'cells')
    return (
      exactKeys(argument, ['name', 'kind', 'cells']) &&
      Array.isArray(argument.cells) &&
      argument.cells.length >= 1 &&
      argument.cells.length <= 32 &&
      argument.cells.every(
        (cell) =>
          exactKeys(cell, ['row', 'column']) &&
          gridIndex(cell.row) &&
          gridIndex(cell.column),
      )
    );
  if (argument.kind === 'candidates')
    return (
      exactKeys(argument, ['name', 'kind', 'candidates']) &&
      Array.isArray(argument.candidates) &&
      argument.candidates.length >= 1 &&
      argument.candidates.length <= 64 &&
      argument.candidates.every(
        (candidate) =>
          exactKeys(candidate, ['cell', 'digit']) &&
          exactKeys(candidate.cell, ['row', 'column']) &&
          gridIndex(candidate.cell.row) &&
          gridIndex(candidate.cell.column) &&
          gridIndex(candidate.digit),
      )
    );
  return (
    argument.kind === 'units' &&
    exactKeys(argument, ['name', 'kind', 'units']) &&
    Array.isArray(argument.units) &&
    argument.units.length >= 1 &&
    argument.units.length <= 32 &&
    argument.units.every(
      (unit) =>
        exactKeys(unit, ['kind', 'index']) &&
        ['row', 'column', 'box'].includes(unit.kind) &&
        gridIndex(unit.index),
    )
  );
};

export const isValidMessageDescriptor = (
  descriptor: unknown,
): descriptor is MessageDescriptor => {
  if (!descriptor || typeof descriptor !== 'object') return false;
  const candidate = descriptor as MessageDescriptor;
  if (
    !exactKeys(candidate, ['id', 'arguments', 'text']) ||
    !boundedText(candidate.id, 200) ||
    !/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(candidate.id) ||
    !boundedText(candidate.text, 4096) ||
    !Array.isArray(candidate.arguments) ||
    candidate.arguments.length > 32 ||
    !candidate.arguments.every(validArgument)
  )
    return false;
  return (
    new Set(candidate.arguments.map(({ name }) => name)).size ===
    candidate.arguments.length
  );
};

export const isKnownBackendMessageId = (id: string): id is BackendMessageId =>
  Object.hasOwn(backendMessageContracts, id);

const targetReference = (target: HintTarget): MessageReference => {
  if (target.kind === 'candidate')
    return message('hint.target.candidate.accessible', {
      row: target.row!,
      column: target.column!,
      value: target.value!,
    });
  if (target.kind === 'cell')
    return message('hint.target.cell.accessible', {
      row: target.row!,
      column: target.column!,
    });
  return message('hint.target.unit.accessible', {
    kind: message(`hint.target.${target.kind}` as MessageId),
    index: target.index!,
  });
};

const argumentReference = (
  argument: MessageArgument,
):
  | string
  | number
  | MessageReference
  | { kind: 'list'; items: MessageReference[] } => {
  if (argument.kind === 'text') return argument.text;
  if (argument.kind === 'integer') return argument.integer;
  if (argument.kind === 'digit') return argument.digit;
  if (argument.kind === 'cell')
    return targetReference({ kind: 'cell', ...argument.cell });
  if (argument.kind === 'candidate')
    return targetReference({
      kind: 'candidate',
      ...argument.candidate.cell,
      value: argument.candidate.digit,
    });
  if (argument.kind === 'row')
    return targetReference({ kind: 'row', index: argument.row });
  if (argument.kind === 'column')
    return targetReference({ kind: 'column', index: argument.column });
  if (argument.kind === 'box')
    return targetReference({ kind: 'box', index: argument.box });
  if (argument.kind === 'difficulty')
    return message(difficultyMessageIds[argument.difficulty]);
  if (argument.kind === 'strategy') {
    const id = strategyMessageIds[argument.strategy];
    return id ? message(id) : argument.strategy;
  }
  if (argument.kind === 'count') return argument.count;
  if (argument.kind === 'digits')
    return {
      kind: 'list',
      items: argument.digits.map((digit) =>
        message('hint.argument.digit', { digit }),
      ),
    };
  if (argument.kind === 'cells')
    return {
      kind: 'list',
      items: argument.cells.map((cell) =>
        targetReference({ kind: 'cell', ...cell }),
      ),
    };
  if (argument.kind === 'candidates')
    return {
      kind: 'list',
      items: argument.candidates.map((candidate) =>
        targetReference({
          kind: 'candidate',
          ...candidate.cell,
          value: candidate.digit,
        }),
      ),
    };
  return {
    kind: 'list',
    items: argument.units.map((unit) =>
      targetReference({ kind: unit.kind, index: unit.index }),
    ),
  };
};

export type DescriptorPresentation =
  | { kind: 'known'; reference: MessageReference }
  | { kind: 'unknown'; text: string }
  | { kind: 'malformed'; reference: MessageReference };

export const presentDescriptor = (
  descriptor: unknown,
): DescriptorPresentation => {
  if (!isValidMessageDescriptor(descriptor))
    return {
      kind: 'malformed',
      reference: message('error.malformedDescriptor'),
    };
  if (!isKnownBackendMessageId(descriptor.id))
    return { kind: 'unknown', text: descriptor.text };
  const contract = backendMessageContracts[descriptor.id];
  if (
    descriptor.arguments.length !== contract.length ||
    contract.some(
      ([name, kind], index) =>
        descriptor.arguments[index]?.name !== name ||
        descriptor.arguments[index]?.kind !== kind,
    )
  )
    return {
      kind: 'malformed',
      reference: message('error.malformedDescriptor'),
    };
  let values:
    | Record<
        string,
        | string
        | number
        | MessageReference
        | { kind: 'list'; items: MessageReference[] }
      >
    | undefined;
  if (descriptor.arguments.length)
    values = Object.fromEntries(
      descriptor.arguments.map((argument) => [
        argument.name,
        argumentReference(argument),
      ]),
    );
  return {
    kind: 'known',
    reference: message(descriptor.id as MessageId, values),
  };
};

export const descriptorMessage = (descriptor: unknown): DisplayMessage => {
  const presentation = presentDescriptor(descriptor);
  return presentation.kind === 'unknown'
    ? { text: presentation.text }
    : presentation.reference;
};

export const descriptorText = (
  descriptor: unknown,
  formatReference: (reference: DisplayMessage) => string,
) => formatReference(descriptorMessage(descriptor));
