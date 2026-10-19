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
const exactKeys = (value: object, keys: readonly string[]) =>
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
  return (
    argument.kind === 'count' &&
    exactKeys(argument, ['name', 'kind', 'count']) &&
    nonnegativeInteger(argument.count)
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
): string | number | MessageReference => {
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
  return argument.count;
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
  let values: Record<string, string | number | MessageReference> | undefined;
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
