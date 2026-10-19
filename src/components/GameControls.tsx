import type { Dispatch, RefObject, SetStateAction } from 'react';
import type {
  Difficulty,
  Digit,
  GameAction,
  HintPreview,
  GameState,
} from '../api/types';
import { formatElapsed } from '../presentation';
import { difficultyMessageIds, useLocalization } from '../i18n/localization';
import type { MessageReference } from '../i18n/messages';
import { ExactActivationButton } from './ExactActivationButton';
import { HintPanel } from './HintPanel';

type ToolIconName = 'notes' | 'candidates' | 'erase' | 'undo' | 'redo' | 'hint';

const ToolIcon = ({ name }: { name: ToolIconName }) => (
  <svg
    className="tool-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {name === 'notes' && (
      <>
        <path d="M4 20h4l10.5-10.5a2.8 2.8 0 0 0-4-4L4 16v4Z" />
        <path d="m13.5 6.5 4 4" />
      </>
    )}
    {name === 'candidates' && (
      <>
        {[6, 12, 18].flatMap((y) =>
          [6, 12, 18].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1" />
          )),
        )}
      </>
    )}
    {name === 'erase' && (
      <>
        <path d="m3.8 15.5 8.9-9a2.3 2.3 0 0 1 3.3 0l2 2a2.3 2.3 0 0 1 0 3.3L10.2 20H7.8l-4-4.5Z" />
        <path d="m10.5 9 6 6" />
        <path d="M13.5 20H21" />
      </>
    )}
    {name === 'undo' && (
      <>
        <path d="m9 7-5 5 5 5" />
        <path d="M20 17a7 7 0 0 0-7-7H4" />
      </>
    )}
    {name === 'redo' && (
      <>
        <path d="m15 7 5 5-5 5" />
        <path d="M4 17a7 7 0 0 1 7-7h9" />
      </>
    )}
    {name === 'hint' && (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.3 14.5A6 6 0 1 1 15.7 14.5c-.8.7-1.2 1.4-1.2 2.5h-5c0-1.1-.4-1.8-1.2-2.5Z" />
      </>
    )}
  </svg>
);

interface NumberPadButtonProps {
  digit: Digit;
  notesMode: boolean;
  disabled: boolean;
  enterDigit: (digit: Digit) => void;
}

const NumberPadButton = ({
  digit,
  notesMode,
  disabled,
  enterDigit,
}: NumberPadButtonProps) => {
  const { formatMessage } = useLocalization();
  return (
    <ExactActivationButton
      onActivate={() => enterDigit(digit)}
      disabled={disabled}
      aria-label={formatMessage(
        notesMode ? 'controls.digit.note' : 'controls.digit.enter',
        { digit },
      )}
    >
      {digit}
    </ExactActivationButton>
  );
};

interface GameControlsProps {
  session: GameState;
  difficulty: Difficulty;
  elapsedSeconds: number;
  message?: MessageReference;
  retryLabel?: MessageReference;
  retryAction: RefObject<() => void>;
  busy: boolean;
  hintOperation?: 'preparing-hint' | 'refreshing-hint' | 'applying-hint';
  paused: boolean;
  canUndo: boolean;
  canRedo: boolean;
  historyTransition?: 'undo' | 'redo';
  notesMode: boolean;
  setNotesMode: Dispatch<SetStateAction<boolean>>;
  allCandidatesVisible: boolean;
  setAllCandidatesVisible: Dispatch<SetStateAction<boolean>>;
  completedDigits: Set<Digit>;
  selectedCellBlocksDigitInput: boolean;
  selectedCellCanErase: boolean;
  enterDigit: (digit: Digit) => void;
  clearSelected: () => void;
  applyAction: (action: GameAction) => Promise<boolean>;
  requestHint: () => void;
  hintPreview?: HintPreview;
  hintStepIndex: number;
  setHintStepIndex: (index: number) => void;
  applyHint: () => void;
  closeHint: () => void;
  startGame: (difficulty: Difficulty) => void;
  replayGame: () => void;
  leaveGame: () => void;
  completionHeading: RefObject<HTMLHeadingElement | null>;
}

export const GameControls = ({
  session,
  difficulty,
  elapsedSeconds,
  message,
  retryLabel,
  retryAction,
  busy,
  hintOperation,
  paused,
  canUndo,
  canRedo,
  historyTransition,
  notesMode,
  setNotesMode,
  allCandidatesVisible,
  setAllCandidatesVisible,
  completedDigits,
  selectedCellBlocksDigitInput,
  selectedCellCanErase,
  enterDigit,
  clearSelected,
  applyAction,
  requestHint,
  hintPreview,
  hintStepIndex,
  setHintStepIndex,
  applyHint,
  closeHint,
  startGame,
  replayGame,
  leaveGame,
  completionHeading,
}: GameControlsProps) => {
  const { formatMessage, formatReference } = useLocalization();
  const difficultyName = formatMessage(difficultyMessageIds[difficulty]);
  return (
    <aside
      className="game-controls"
      aria-label={formatMessage('controls.label')}
    >
      {retryLabel ? (
        <div className="game-status" role="alert">
          <span aria-hidden="true" />
          <div>
            <p className="game-message">{formatReference(message)}</p>
            <button
              type="button"
              className="inline-retry"
              onClick={() => retryAction.current()}
              disabled={busy}
            >
              {formatReference(retryLabel)}
            </button>
          </div>
        </div>
      ) : (
        <p className="game-announcement" aria-live="polite">
          {formatReference(message)}
        </p>
      )}

      {hintPreview && session.snapshot.status !== 'solved' ? (
        <HintPanel
          preview={hintPreview}
          stepIndex={hintStepIndex}
          setStepIndex={setHintStepIndex}
          apply={applyHint}
          close={closeHint}
          busy={busy}
          operation={
            hintOperation === 'applying-hint' ||
            hintOperation === 'refreshing-hint'
              ? hintOperation
              : undefined
          }
        />
      ) : hintOperation === 'preparing-hint' ? (
        <section
          className="hint-panel hint-panel--progress"
          role="status"
          aria-label={formatMessage('controls.hint.preparing')}
          aria-busy="true"
        >
          <span
            className="loading-mark loading-mark--inline"
            aria-hidden="true"
          />
          <div>
            <p className="eyebrow">{formatMessage('hint.label')}</p>
            <h2>{formatMessage('controls.hint.preparing')}</h2>
            <p>{formatMessage('controls.hint.preparingDetail')}</p>
          </div>
        </section>
      ) : session.snapshot.status === 'solved' ? (
        <section
          className="completion-panel"
          aria-labelledby="completion-title"
        >
          <p className="eyebrow">
            {formatMessage('controls.complete.eyebrow')}
          </p>
          <h2 ref={completionHeading} id="completion-title" tabIndex={-1}>
            {formatMessage('controls.complete.title', {
              time: formatElapsed(elapsedSeconds),
            })}
          </h2>
          <p>
            {formatMessage('controls.complete.detail', {
              difficulty: difficultyName,
            })}
          </p>
          <div className="completion-actions completion-actions--peers">
            <button
              className="secondary-button"
              type="button"
              onClick={() => startGame(difficulty)}
              disabled={busy}
            >
              {formatMessage('controls.complete.another', {
                difficulty: difficultyName,
              })}
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={replayGame}
              disabled={busy}
            >
              {formatMessage('controls.complete.replay')}
            </button>
            <button className="quiet-action" type="button" onClick={leaveGame}>
              {formatMessage('controls.complete.choose')}
            </button>
          </div>
        </section>
      ) : (
        <>
          <div
            className={`number-pad${notesMode ? ' number-pad--notes' : ''}`}
            aria-label={formatMessage(
              notesMode ? 'controls.pad.notes' : 'controls.pad',
            )}
          >
            {Array.from({ length: 9 }, (_, index) => {
              const digit = (index + 1) as Digit;
              return (
                <NumberPadButton
                  key={digit}
                  digit={digit}
                  notesMode={notesMode}
                  enterDigit={enterDigit}
                  disabled={
                    paused ||
                    busy ||
                    hintPreview !== undefined ||
                    selectedCellBlocksDigitInput ||
                    completedDigits.has(digit)
                  }
                />
              );
            })}
          </div>

          <div className="tool-grid">
            <div
              className="tool-group tool-group--modes"
              role="group"
              aria-label={formatMessage('controls.modes')}
            >
              <button
                type="button"
                className={notesMode ? 'tool-active' : ''}
                aria-label={formatMessage(
                  notesMode ? 'controls.notes.on' : 'controls.notes.off',
                )}
                aria-pressed={notesMode}
                onClick={() => setNotesMode((current) => !current)}
                disabled={paused || busy || hintPreview !== undefined}
              >
                <ToolIcon name="notes" />
                <span className="tool-label">
                  {formatMessage(
                    notesMode ? 'controls.notes.on' : 'controls.notes.off',
                  )}
                </span>
              </button>
              <button
                type="button"
                className={allCandidatesVisible ? 'tool-active' : ''}
                aria-label={formatMessage(
                  allCandidatesVisible
                    ? 'controls.candidates.on'
                    : 'controls.candidates.off',
                )}
                aria-pressed={allCandidatesVisible}
                onClick={() => setAllCandidatesVisible((current) => !current)}
                disabled={paused || busy || hintPreview !== undefined}
              >
                <ToolIcon name="candidates" />
                <span className="tool-label">
                  {formatMessage(
                    allCandidatesVisible
                      ? 'controls.candidates.on'
                      : 'controls.candidates.off',
                  )}
                </span>
              </button>
            </div>
            <div
              className="tool-group tool-group--actions"
              role="group"
              aria-label={formatMessage('controls.actions')}
            >
              <button
                type="button"
                aria-label={formatMessage('controls.erase')}
                onClick={clearSelected}
                disabled={
                  paused ||
                  busy ||
                  hintPreview !== undefined ||
                  !selectedCellCanErase
                }
              >
                <ToolIcon name="erase" />
                <span className="tool-label">
                  {formatMessage('controls.erase')}
                </span>
              </button>
              <button
                type="button"
                aria-label={formatMessage(
                  historyTransition === 'undo'
                    ? 'controls.undoing'
                    : 'controls.undo',
                )}
                aria-busy={historyTransition === 'undo'}
                onClick={() => void applyAction({ kind: 'undo' })}
                disabled={
                  paused ||
                  !canUndo ||
                  busy ||
                  historyTransition !== undefined ||
                  hintPreview !== undefined
                }
              >
                <ToolIcon name="undo" />
                <span className="tool-label">
                  {formatMessage(
                    historyTransition === 'undo'
                      ? 'controls.undoing'
                      : 'controls.undo',
                  )}
                </span>
              </button>
              <button
                type="button"
                aria-label={formatMessage(
                  historyTransition === 'redo'
                    ? 'controls.redoing'
                    : 'controls.redo',
                )}
                aria-busy={historyTransition === 'redo'}
                onClick={() => void applyAction({ kind: 'redo' })}
                disabled={
                  paused ||
                  !canRedo ||
                  busy ||
                  historyTransition !== undefined ||
                  hintPreview !== undefined
                }
              >
                <ToolIcon name="redo" />
                <span className="tool-label">
                  {formatMessage(
                    historyTransition === 'redo'
                      ? 'controls.redoing'
                      : 'controls.redo',
                  )}
                </span>
              </button>
              <button
                className="hint-button"
                type="button"
                aria-label={formatMessage('controls.hint.reveal')}
                onClick={requestHint}
                disabled={paused || busy || hintPreview !== undefined}
              >
                <ToolIcon name="hint" />
                <span className="tool-label">
                  {formatMessage('hint.label')}
                </span>
              </button>
            </div>
          </div>

          <details className="keyboard-shortcuts">
            <summary>{formatMessage('controls.shortcuts')}</summary>
            <dl>
              <div>
                <dt>{formatMessage('controls.shortcuts.move')}</dt>
                <dd>
                  <kbd>{formatMessage('controls.shortcuts.arrows')}</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.shortcuts.enter')}</dt>
                <dd>
                  <kbd>1–9</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.shortcuts.notes')}</dt>
                <dd>
                  <kbd>N</kbd> / <kbd>A</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.erase')}</dt>
                <dd>
                  <kbd>Delete</kbd> {formatMessage('controls.shortcuts.or')}{' '}
                  <kbd>Backspace</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.shortcuts.pause')}</dt>
                <dd>
                  <kbd>P</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.shortcuts.hint')}</dt>
                <dd>
                  <kbd>H</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.shortcuts.hintOther')}</dt>
                <dd>
                  <kbd>←</kbd>/<kbd>→</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.undo')}</dt>
                <dd>
                  <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Z</kbd>
                </dd>
              </div>
              <div>
                <dt>{formatMessage('controls.redo')}</dt>
                <dd>
                  <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>
                </dd>
              </div>
            </dl>
          </details>
        </>
      )}
    </aside>
  );
};
