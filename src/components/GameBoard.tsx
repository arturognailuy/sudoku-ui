import type {
  Digit,
  HintLink,
  HintMark,
  HintNode,
  HintRole,
  HintTarget,
  GameState,
} from '../api/types';

interface GameBoardProps {
  session: GameState;
  paused: boolean;
  selected?: [number, number];
  setSelected: (cell: [number, number]) => void;
  firstFocusableCell?: [number, number];
  selectedValue: number;
  cellClass: (row: number, column: number) => string;
  automaticCandidates: boolean;
  pendingCells?: Set<string>;
  hintMarks?: HintMark[];
  hintNodes?: HintNode[];
  hintLinks?: HintLink[];
}

const targetIncludesCell = (
  target: HintTarget,
  row: number,
  column: number,
) => {
  const oneBasedRow = row + 1;
  const oneBasedColumn = column + 1;
  if (target.kind === 'cell' || target.kind === 'candidate')
    return target.row === oneBasedRow && target.column === oneBasedColumn;
  if (target.kind === 'row') return target.index === oneBasedRow;
  if (target.kind === 'column') return target.index === oneBasedColumn;
  if (target.kind === 'box')
    return (
      target.index === Math.floor(row / 3) * 3 + Math.floor(column / 3) + 1
    );
  return false;
};

const candidatePoint = (target: HintTarget) => {
  const value = target.value ?? 5;
  return {
    x: (target.column ?? 1) - 1 + (((value - 1) % 3) + 0.5) / 3,
    y: (target.row ?? 1) - 1 + (Math.floor((value - 1) / 3) + 0.5) / 3,
  };
};

const HintScene = ({
  nodes,
  links,
}: {
  nodes: HintNode[];
  links: HintLink[];
}) => {
  if (nodes.length === 0) return null;
  const byId = new Map(nodes.map((node) => [node.id, node]));
  return (
    <svg className="hint-scene" viewBox="0 0 9 9" aria-hidden="true">
      <defs>
        <marker
          id="hint-arrow"
          markerWidth="5"
          markerHeight="5"
          refX="4"
          refY="2.5"
          orient="auto"
        >
          <path d="M0,0 L5,2.5 L0,5 z" />
        </marker>
      </defs>
      {links.map((link, index) => {
        const from = byId.get(link.from);
        const to = byId.get(link.to);
        if (!from || !to) return null;
        const a = candidatePoint(from.target);
        const b = candidatePoint(to.target);
        return (
          <line
            key={`${link.from}-${link.to}-${index}`}
            className={`hint-link hint-link--${link.kind}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
          />
        );
      })}
      {nodes.map((node) => {
        const point = candidatePoint(node.target);
        const label = node.order ? String(node.order) : node.group;
        return (
          <g
            key={node.id}
            className={`hint-node${node.group ? ` hint-node--group-${node.group.toLowerCase()}` : ''}`}
          >
            <circle cx={point.x} cy={point.y} r="0.13" />
            {label && (
              <text x={point.x} y={point.y - 0.28}>
                {label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

const roleLabel: Record<HintRole, string> = {
  focus: 'hint focus',
  premise: 'hint evidence',
  eliminated: 'candidate eliminated',
  conclusion: 'hint conclusion',
};

export const GameBoard = ({
  session,
  paused,
  selected,
  setSelected,
  firstFocusableCell,
  selectedValue,
  cellClass,
  automaticCandidates,
  pendingCells = new Set(),
  hintMarks = [],
  hintNodes = [],
  hintLinks = [],
}: GameBoardProps) => (
  <div className={`board-stage${paused ? ' board-stage--paused' : ''}`}>
    <div className="game-board" role="grid" aria-label="Sudoku game board">
      {session.snapshot.values.flatMap((rowValues, row) =>
        rowValues.map((value, column) => {
          const notes = session.snapshot.notes[row]?.[column] ?? [];
          const candidates = session.snapshot.candidates[row]?.[column] ?? [];
          const showAutomaticCandidates = automaticCandidates;
          const displayedNotes = showAutomaticCandidates ? candidates : notes;
          const given = session.snapshot.givens[row]?.[column] !== 0;
          const invalid = session.snapshot.invalid[row]?.[column] === true;
          const pending = pendingCells.has(`${row}-${column}`);
          const hintRoles = Array.from(
            new Set(
              hintMarks
                .filter(({ target }) => targetIncludesCell(target, row, column))
                .map(({ role }) => role),
            ),
          );
          const nodeDescriptions = hintNodes
            .filter(({ target }) => targetIncludesCell(target, row, column))
            .map((node) =>
              [
                node.group ? `group ${node.group}` : '',
                node.order ? `chain position ${node.order}` : '',
              ]
                .filter(Boolean)
                .join(', '),
            )
            .filter(Boolean);
          const hintDescription = [
            ...hintRoles.map((role) => roleLabel[role]),
            ...nodeDescriptions,
          ].join(', ');
          const isSelected = selected?.[0] === row && selected?.[1] === column;
          const isFocusable = isSelected
            ? true
            : !selected &&
              firstFocusableCell?.[0] === row &&
              firstFocusableCell?.[1] === column;
          const cellContent = value
            ? `${given ? 'given ' : ''}${value}`
            : showAutomaticCandidates && displayedNotes.length > 0
              ? `empty, automatic candidates ${displayedNotes.join(', ')}`
              : notes.length > 0
                ? `empty, notes ${notes.join(', ')}`
                : 'empty';
          return (
            <button
              key={`${row}-${column}`}
              className={[
                cellClass(row, column),
                ...hintRoles.map((role) => `game-cell--hint-${role}`),
              ]
                .filter(Boolean)
                .join(' ')}
              data-cell={`${row}-${column}`}
              type="button"
              role="gridcell"
              aria-invalid={invalid || undefined}
              aria-busy={pending || undefined}
              aria-selected={isSelected}
              aria-label={`Row ${row + 1}, column ${column + 1}, ${cellContent}${pending ? ', checking' : ''}${invalid ? ', invalid' : ''}${hintDescription ? `, ${hintDescription}` : ''}`}
              tabIndex={isFocusable ? 0 : -1}
              onPointerDown={(event) => {
                if (event.pointerType !== 'touch') setSelected([row, column]);
              }}
              onFocus={() => setSelected([row, column])}
              onClick={() => setSelected([row, column])}
            >
              {value ? (
                <span className="cell-value">{value}</span>
              ) : (
                <span
                  className={`cell-notes${showAutomaticCandidates ? ' cell-notes--automatic' : ''}`}
                  aria-hidden="true"
                >
                  {Array.from({ length: 9 }, (_, index) => {
                    const digit = (index + 1) as Digit;
                    const isMatchingNote =
                      selectedValue !== 0 &&
                      digit === selectedValue &&
                      displayedNotes.includes(digit);
                    const candidateRoles = hintMarks
                      .filter(
                        ({ target }) =>
                          target.kind === 'candidate' &&
                          target.row === row + 1 &&
                          target.column === column + 1 &&
                          target.value === digit,
                      )
                      .map(({ role }) => `cell-note--hint-${role}`);
                    return (
                      <span
                        key={index}
                        className={
                          [
                            isMatchingNote ? 'cell-note--matching' : '',
                            ...candidateRoles,
                          ]
                            .filter(Boolean)
                            .join(' ') || undefined
                        }
                      >
                        {displayedNotes.includes(digit) ||
                        candidateRoles.length > 0
                          ? digit
                          : ''}
                      </span>
                    );
                  })}
                </span>
              )}
            </button>
          );
        }),
      )}
    </div>
    <HintScene nodes={hintNodes} links={hintLinks} />
    {paused && (
      <div className="pause-cover" role="status">
        <strong>Puzzle paused</strong>
        <span>Your time is stopped.</span>
      </div>
    )}
  </div>
);
