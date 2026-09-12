import { useCallback, useEffect, useRef, useState } from 'react';
import { SiteFooter, SiteHeader } from './components/AppChrome';
import { ConfirmationDialog } from './components/ConfirmationDialog';
import { GameBoard } from './components/GameBoard';
import { GameControls } from './components/GameControls';
import { LoadingState } from './components/LoadingState';
import { Welcome } from './components/Welcome';
import { useBoardNavigation } from './hooks/useBoardNavigation';
import { useGameTimer } from './hooks/useGameTimer';
import { useSessionLifecycle } from './hooks/useSessionLifecycle';
import {
  formatElapsed,
  titleCase,
  type ConfirmationAction,
} from './presentation';
import type { Difficulty } from './api/types';
import './App.css';

const App = () => {
  const game = useSessionLifecycle();
  const [confirmationAction, setConfirmationAction] =
    useState<ConfirmationAction>();
  const [nextDifficulty, setNextDifficulty] = useState<Difficulty>(
    game.difficulty,
  );
  const confirmationTrigger = useRef<HTMLElement>(null);
  const completionHeading = useRef<HTMLHeadingElement>(null);

  const timer = useGameTimer({
    activeSessionId: game.session?.id,
    difficulty: game.difficulty,
    preparing: game.preparingDifficulty !== undefined,
    confirmationAction,
    solved: game.session?.snapshot.status === 'solved',
    restoredGame: game.restoredGame,
  });

  const togglePaused = useCallback(() => {
    if (game.busy || game.session?.snapshot.status === 'solved') return;
    timer.setPaused((current) => {
      game.setMessage(current ? 'Puzzle resumed.' : 'Puzzle paused.');
      return !current;
    });
  }, [game, timer]);

  const board = useBoardNavigation({
    session: game.session,
    paused: timer.paused,
    confirmationAction,
    applyAction: game.applyAction,
    togglePaused,
    setMessage: game.setMessage,
  });

  const startGame = useCallback(
    async (difficulty?: Difficulty) => {
      const nextSession = await game.startGame(difficulty);
      if (nextSession) timer.resetTimer();
    },
    [game, timer],
  );

  const leaveGame = useCallback(() => {
    game.leaveGame();
    timer.resetTimer();
    setConfirmationAction(undefined);
  }, [game, timer]);

  const dismissConfirmation = useCallback(() => {
    setConfirmationAction(undefined);
    window.requestAnimationFrame(() => confirmationTrigger.current?.focus());
  }, []);

  useEffect(() => {
    if (game.session?.snapshot.status !== 'solved') return;
    completionHeading.current?.focus();
  }, [game.session?.snapshot.status]);

  const requestHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!game.session) return;
    event.preventDefault();
    if (game.session.snapshot.status === 'solved') {
      leaveGame();
      return;
    }
    confirmationTrigger.current = event.currentTarget;
    setConfirmationAction('home');
  };

  const requestNewPuzzle = (event: React.MouseEvent<HTMLButtonElement>) => {
    confirmationTrigger.current = event.currentTarget;
    setNextDifficulty(game.difficulty);
    setConfirmationAction('new-puzzle');
  };

  return (
    <main className={`app-shell${game.session ? ' app-shell--game' : ''}`}>
      <SiteHeader connection={game.connection} onHome={requestHome} />

      {game.initializing ? (
        <LoadingState />
      ) : game.preparingDifficulty ? (
        <LoadingState preparingDifficulty={game.preparingDifficulty} />
      ) : !game.session ? (
        <Welcome
          difficulty={game.difficulty}
          setDifficulty={game.setDifficulty}
          connection={game.connection}
          busy={game.busy}
          message={game.message}
          startGame={() => void startGame()}
        />
      ) : (
        <section className="game" aria-labelledby="game-title">
          <div className="game-heading">
            <div>
              <p className="eyebrow">{titleCase(game.difficulty)} puzzle</p>
              <h1 id="game-title">Your puzzle</h1>
            </div>
            <div className="game-heading-actions">
              <span className="elapsed-time" aria-label="Elapsed time">
                {formatElapsed(timer.elapsedSeconds)}
              </span>
              <button
                className="secondary-button"
                type="button"
                onClick={togglePaused}
                disabled={
                  game.busy || game.session.snapshot.status === 'solved'
                }
              >
                {timer.paused ? 'Resume' : 'Pause'}
              </button>
              <button
                className="secondary-button"
                type="button"
                aria-haspopup="dialog"
                onClick={requestNewPuzzle}
                disabled={game.busy}
              >
                New puzzle
              </button>
            </div>
          </div>

          <div className="game-layout">
            <GameBoard
              session={board.displaySession ?? game.session}
              paused={timer.paused}
              selected={board.selected}
              setSelected={board.setSelected}
              firstFocusableCell={board.firstFocusableCell}
              selectedValue={board.selectedValue}
              cellClass={board.cellClass}
              automaticCandidates={board.automaticCandidates}
            />
            <GameControls
              session={game.session}
              difficulty={game.difficulty}
              elapsedSeconds={timer.elapsedSeconds}
              message={game.message}
              retryLabel={game.retryLabel}
              retryAction={game.retryAction}
              busy={game.busy}
              paused={timer.paused}
              notesMode={board.notesMode}
              setNotesMode={board.setNotesMode}
              automaticCandidates={board.automaticCandidates}
              setAutomaticCandidates={board.setAutomaticCandidates}
              completedDigits={board.completedDigits}
              selectedCellBlocksDigitInput={board.selectedCellBlocksDigitInput}
              selectedCellCanErase={board.selectedCellCanErase}
              enterDigit={board.enterDigit}
              clearSelected={board.clearSelected}
              applyAction={game.applyAction}
              startGame={(difficulty) => void startGame(difficulty)}
              leaveGame={leaveGame}
              completionHeading={completionHeading}
            />
          </div>

          {confirmationAction && (
            <ConfirmationDialog
              action={confirmationAction}
              nextDifficulty={nextDifficulty}
              setNextDifficulty={setNextDifficulty}
              dismiss={dismissConfirmation}
              confirm={() => {
                if (confirmationAction === 'home') {
                  leaveGame();
                } else {
                  setConfirmationAction(undefined);
                  void startGame(nextDifficulty);
                }
              }}
            />
          )}
        </section>
      )}

      <SiteFooter />
    </main>
  );
};

export default App;
