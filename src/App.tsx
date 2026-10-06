import { useCallback, useEffect, useRef, useState } from 'react';
import { SiteFooter, SiteHeader } from './components/AppChrome';
import { AccountPanel } from './components/AccountPanel';
import { ConfirmationDialog } from './components/ConfirmationDialog';
import { GameBoard } from './components/GameBoard';
import { GameControls } from './components/GameControls';
import { LoadingState } from './components/LoadingState';
import { Welcome } from './components/Welcome';
import { useBoardNavigation } from './hooks/useBoardNavigation';
import { useGameTimer } from './hooks/useGameTimer';
import { useSessionLifecycle } from './hooks/useSessionLifecycle';
import { useThemePreference } from './hooks/useThemePreference';
import {
  formatElapsed,
  titleCase,
  type ConfirmationAction,
} from './presentation';
import type { Difficulty } from './api/types';
import './App.css';

const App = () => {
  const game = useSessionLifecycle();
  const theme = useThemePreference();
  const [confirmationAction, setConfirmationAction] =
    useState<ConfirmationAction>();
  const [nextDifficulty, setNextDifficulty] = useState<Difficulty>(
    game.difficulty,
  );
  const [accountOpen, setAccountOpen] = useState(false);
  const confirmationTrigger = useRef<HTMLElement>(null);
  const completionHeading = useRef<HTMLHeadingElement>(null);

  const timer = useGameTimer({
    activeSessionId: game.session?.id,
    difficulty: game.activeDifficulty,
    preparing: game.preparingDifficulty !== undefined,
    confirmationAction,
    solved: game.session?.snapshot.status === 'solved',
    restoredGame: game.restoredGame,
    persistPresentation: game.persistPresentation,
  });

  const togglePaused = useCallback(() => {
    if (game.busy || game.session?.snapshot.status === 'solved') return;
    timer.setPaused((current) => {
      game.setMessage(current ? 'Puzzle resumed.' : 'Puzzle paused.');
      return !current;
    });
  }, [game, timer]);

  let canUndo = game.session?.snapshot.can_undo ?? false;
  let canRedo = game.session?.snapshot.can_redo ?? false;
  for (const { action } of game.pendingActions) {
    if (action.kind === 'undo') {
      canRedo = true;
    } else if (action.kind === 'redo') {
      canUndo = true;
    } else {
      canUndo = true;
      canRedo = false;
    }
  }

  const board = useBoardNavigation({
    session: game.session,
    paused: timer.paused,
    confirmationAction,
    applyAction: game.applyAction,
    pendingActions: game.pendingActions,
    canUndo,
    canRedo,
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
    void game.leaveGame();
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

  useEffect(() => {
    if (!accountOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAccountOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [accountOpen]);

  const requestHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!game.session) return;
    event.preventDefault();
    if (game.hasPendingActions) {
      game.setMessage('Wait for pending moves before leaving this puzzle.');
      return;
    }
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
      <SiteHeader
        connection={game.connection}
        onHome={requestHome}
        theme={theme.preference}
        resolvedTheme={theme.resolvedTheme}
        onThemeChange={theme.setThemePreference}
        accountControl={
          !game.account ? (
            <a className="header-account-action" href={game.signInUrl}>
              Sign in
            </a>
          ) : (
            <button
              className="header-account-action"
              type="button"
              aria-expanded={accountOpen}
              aria-controls="account-panel"
              onClick={() => setAccountOpen((open) => !open)}
            >
              <span className="account-avatar" aria-hidden="true">
                {(game.account.display_name || game.account.email)
                  .trim()
                  .charAt(0)
                  .toUpperCase()}
              </span>
              <span className="account-button-label">
                {game.account.display_name || 'Account'}
              </span>
            </button>
          )
        }
      />

      {game.account && accountOpen && (
        <div className="account-layer" id="account-panel">
          <button
            className="account-scrim"
            type="button"
            aria-label="Close account panel"
            onClick={() => setAccountOpen(false)}
          />
          <AccountPanel
            account={game.account}
            games={game.accountGames}
            signInUrl={game.signInUrl}
            busy={game.busy}
            close={() => setAccountOpen(false)}
            resumeGame={(gameId) => {
              setAccountOpen(false);
              void game.resumeAccountGame(gameId);
            }}
            deleteGame={(gameId) => void game.deleteAccountGame(gameId)}
            logout={() => {
              setAccountOpen(false);
              void game.logout();
            }}
            revokeSessions={() => void game.revokeAccountSessions()}
            deleteAccount={() => void game.deleteAccount()}
          />
        </div>
      )}

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
              <p className="eyebrow">
                {titleCase(game.activeDifficulty)} puzzle
              </p>
              <h1 id="game-title">Your puzzle</h1>
            </div>
            <div className="game-heading-actions">
              <span className="elapsed-time" aria-label="Elapsed time">
                {formatElapsed(timer.elapsedSeconds)}
              </span>
              <span
                className="mistake-count"
                aria-label={`${game.session.snapshot.mistakes} ${game.session.snapshot.mistakes === 1 ? 'mistake' : 'mistakes'}`}
              >
                Mistakes {game.session.snapshot.mistakes}
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
                disabled={game.busy || game.hasPendingActions}
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
              pendingCells={board.pendingCells}
            />
            <GameControls
              session={game.session}
              difficulty={game.activeDifficulty}
              elapsedSeconds={timer.elapsedSeconds}
              message={game.message}
              retryLabel={game.retryLabel}
              retryAction={game.retryAction}
              busy={game.busy}
              paused={timer.paused}
              canUndo={canUndo}
              canRedo={canRedo}
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
