import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
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
import { formatElapsed, type ConfirmationAction } from './presentation';
import type { Difficulty, HintPreview } from './api/types';
import type { LocalePreference } from './i18n/locales';
import { difficultyMessageIds, useLocalization } from './i18n/localization';
import { message, type MessageReference } from './i18n/messages';
import { reloadForNewDeployment } from './deployment';
import './App.css';

interface AppProps {
  localePreference: LocalePreference;
  onLocaleChange: (preference: LocalePreference) => void;
}

const App = ({ localePreference, onLocaleChange }: AppProps) => {
  const { formatMessage, formatReference } = useLocalization();
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
  const [hintPreview, setHintPreview] = useState<HintPreview>();
  const [hintStepIndex, setHintStepIndex] = useState(0);
  const [transientNotice, setTransientNotice] = useState<MessageReference>();
  const [returningHome, setReturningHome] = useState(false);

  const resetHint = useCallback(() => {
    setHintPreview(undefined);
    setHintStepIndex(0);
  }, []);

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
      game.setMessage(message(current ? 'status.resumed' : 'status.paused'));
      return !current;
    });
  }, [game, timer]);

  let canUndo = game.session?.snapshot.can_undo ?? false;
  let canRedo = game.session?.snapshot.can_redo ?? false;
  for (const { action } of game.pendingActions) {
    if (action.kind === 'undo' || action.kind === 'redo') continue;
    canUndo = true;
    canRedo = false;
  }
  if (game.historyTransition) {
    canUndo = false;
    canRedo = false;
  }

  const board = useBoardNavigation({
    session: game.session,
    paused: timer.paused || hintPreview !== undefined,
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
      if (nextSession) {
        resetHint();
        timer.resetTimer();
      }
    },
    [game, resetHint, timer],
  );

  const replayGame = useCallback(async () => {
    setConfirmationAction(undefined);
    const accepted = await game.applyAction({ kind: 'restart' });
    if (!accepted) return;
    resetHint();
    timer.resetTimer();
    board.resetForReplay();
    setTransientNotice(message('status.restarted'));
    window.requestAnimationFrame(() => {
      board.setSelected(board.firstFocusableCell);
      window.requestAnimationFrame(() => {
        document
          .querySelector<HTMLElement>('.game-cell[tabindex="0"]')
          ?.focus();
      });
    });
  }, [board, game, resetHint, timer]);

  const closeHint = useCallback(() => {
    resetHint();
    game.setMessage(message('status.hintClosed'));
  }, [game, resetHint]);

  const requestHint = useCallback(async () => {
    const preview = await game.previewHint();
    if (!preview) return;
    board.setAllCandidatesVisible(true);
    setHintPreview(preview);
    setHintStepIndex(0);
  }, [board, game]);

  const applyHint = useCallback(async () => {
    if (!hintPreview) return;
    const accepted = await game.applyAction({
      kind: 'apply-hint',
      plan_id: hintPreview.hint.plan_id,
    });
    if (accepted) {
      setHintPreview(undefined);
      setHintStepIndex(0);
      game.setMessage(
        message(
          hintPreview.hint.kind === 'strategy'
            ? 'status.strategyApplied'
            : 'status.correctionApplied',
        ),
      );
      return;
    }
    if (game.consumeActionErrorCode() !== 'stale-hint') return;
    const replacement = await game.previewHint('refreshing-hint');
    if (!replacement) return;
    if (replacement.hint.plan_id === hintPreview.hint.plan_id) {
      setHintPreview(undefined);
      setHintStepIndex(0);
      game.setMessage(message('status.hintAlreadyApplied'));
      return;
    }
    setHintPreview(replacement);
    setHintStepIndex(0);
    game.setMessage(message('status.hintRefreshed'));
  }, [game, hintPreview]);

  const leaveGame = useCallback(async () => {
    setReturningHome(true);
    setConfirmationAction(undefined);
    const left = await game.leaveGame();
    if (!left) {
      setReturningHome(false);
      return;
    }
    resetHint();
    timer.resetTimer();
    const reloading = await reloadForNewDeployment();
    if (!reloading) setReturningHome(false);
  }, [game, resetHint, timer]);

  const dismissConfirmation = useCallback(() => {
    setConfirmationAction(undefined);
    window.requestAnimationFrame(() => confirmationTrigger.current?.focus());
  }, []);

  useEffect(() => {
    resetHint();
  }, [game.session?.id, resetHint]);

  useEffect(() => {
    if (
      game.message &&
      'id' in game.message &&
      game.message.id === 'status.accountSaved'
    ) {
      setTransientNotice(game.message);
    }
  }, [game.message]);

  useEffect(() => {
    if (!transientNotice) return;
    const timeout = window.setTimeout(
      () => setTransientNotice(undefined),
      3200,
    );
    return () => window.clearTimeout(timeout);
  }, [transientNotice]);

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

  useLayoutEffect(() => {
    if (
      !game.session ||
      game.session.snapshot.status === 'solved' ||
      confirmationAction
    )
      return;
    const handleHintKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.matches('input, textarea, select') || target.isContentEditable)
      )
        return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      if (!hintPreview) {
        if (event.key.toLowerCase() === 'h' && !timer.paused && !game.busy) {
          event.preventDefault();
          void requestHint();
        }
        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeHint();
        return;
      }
      if (game.busy) return;
      if (event.key.toLowerCase() === 'h') {
        event.preventDefault();
        if (hintStepIndex < hintPreview.hint.steps.length - 1) {
          setHintStepIndex(hintStepIndex + 1);
        } else {
          void applyHint();
        }
      } else if (event.key === 'ArrowLeft' && hintStepIndex > 0) {
        event.preventDefault();
        setHintStepIndex(hintStepIndex - 1);
      } else if (
        event.key === 'ArrowRight' &&
        hintStepIndex < hintPreview.hint.steps.length - 1
      ) {
        event.preventDefault();
        setHintStepIndex(hintStepIndex + 1);
      } else if (
        event.key === 'Enter' &&
        hintStepIndex === hintPreview.hint.steps.length - 1
      ) {
        event.preventDefault();
        void applyHint();
      }
    };
    window.addEventListener('keydown', handleHintKeyDown);
    return () => window.removeEventListener('keydown', handleHintKeyDown);
  }, [
    applyHint,
    closeHint,
    confirmationAction,
    game.busy,
    game.session,
    hintPreview,
    hintStepIndex,
    requestHint,
    timer.paused,
  ]);

  const requestHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!game.session) return;
    event.preventDefault();
    if (game.hasPendingActions) {
      game.setMessage(message('status.waitBeforeLeaving'));
      return;
    }
    if (game.session.snapshot.status === 'solved') {
      void leaveGame();
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
        localePreference={localePreference}
        onLocaleChange={onLocaleChange}
        accountControl={
          !game.account ? (
            <a className="header-account-action" href={game.signInUrl}>
              <span className="account-entry-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" focusable="false">
                  <circle cx="8" cy="5.25" r="2.25" />
                  <path d="M3.5 13c.55-2.25 2.05-3.4 4.5-3.4s3.95 1.15 4.5 3.4" />
                </svg>
              </span>
              <span className="account-button-label">
                {formatMessage('account.signIn.short')}
              </span>
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
                {game.account.display_name || formatMessage('account.label')}
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
            aria-label={formatMessage('account.close')}
            onClick={() => setAccountOpen(false)}
          />
          <AccountPanel
            account={game.account}
            games={game.accountGames}
            signInUrl={game.signInUrl}
            busy={game.busy}
            operation={game.accountOperation}
            close={() => setAccountOpen(false)}
            resumeGame={async (gameId) => {
              const opened = await game.resumeAccountGame(gameId);
              if (opened) setAccountOpen(false);
              return opened;
            }}
            deleteGame={game.deleteAccountGame}
            deleteAllGames={game.deleteAllAccountGames}
            logout={async () => {
              const signedOut = await game.logout();
              if (signedOut) setAccountOpen(false);
              return signedOut;
            }}
            revokeSessions={game.revokeAccountSessions}
            deleteAccount={game.deleteAccount}
          />
        </div>
      )}

      {game.claimingGuest ? (
        <LoadingState transition="claiming-guest" />
      ) : game.initializing ? (
        <LoadingState />
      ) : returningHome ? (
        <LoadingState transition="returning-home" />
      ) : game.activeTransaction === 'restarting-puzzle' ? (
        <LoadingState transition="restarting-puzzle" />
      ) : game.session && game.preparingDifficulty ? (
        <LoadingState preparingDifficulty={game.preparingDifficulty} />
      ) : !game.session ? (
        <Welcome
          difficulty={game.difficulty}
          setDifficulty={game.setDifficulty}
          connection={game.connection}
          busy={game.busy}
          preparingDifficulty={game.preparingDifficulty}
          message={game.preparingDifficulty ? undefined : game.message}
          startGame={() => void startGame()}
        />
      ) : (
        <section className="game" aria-labelledby="game-title">
          <div className="game-heading">
            <h1 id="game-title">
              {formatMessage('game.title', {
                difficulty: formatMessage(
                  difficultyMessageIds[game.activeDifficulty],
                ),
              })}
            </h1>
            <div
              className="game-heading-actions"
              aria-label={formatMessage('game.statusActions')}
            >
              <span
                className="elapsed-time"
                aria-label={formatMessage('game.elapsed')}
              >
                {formatElapsed(timer.elapsedSeconds)}
              </span>
              <span
                className="mistake-count"
                aria-label={formatMessage('game.mistakes.label', {
                  count: game.session.snapshot.mistakes,
                })}
              >
                {formatMessage('game.mistakes', {
                  count: game.session.snapshot.mistakes,
                })}
              </span>
              <button
                className="secondary-button"
                type="button"
                onClick={togglePaused}
                disabled={
                  game.busy || game.session.snapshot.status === 'solved'
                }
              >
                {formatMessage(timer.paused ? 'game.resume' : 'game.pause')}
              </button>
              <button
                className="secondary-button"
                type="button"
                aria-haspopup="dialog"
                onClick={requestNewPuzzle}
                disabled={game.busy || game.hasPendingActions}
              >
                {formatMessage('confirmation.restart.title')}
              </button>
            </div>
          </div>

          <div className="game-layout">
            <GameBoard
              session={board.displaySession ?? game.session}
              paused={timer.paused}
              readOnly={hintPreview !== undefined}
              selected={board.selected}
              setSelected={board.setSelected}
              firstFocusableCell={board.firstFocusableCell}
              selectedValue={board.selectedValue}
              cellClass={board.cellClass}
              showCandidates={board.allCandidatesVisible}
              visibleCandidateCells={board.visibleCandidateCells}
              pendingCells={board.pendingCells}
              hintMarks={hintPreview?.hint.steps[hintStepIndex]?.marks}
              hintNodes={hintPreview?.hint.steps[hintStepIndex]?.nodes}
              hintLinks={hintPreview?.hint.steps[hintStepIndex]?.links}
            />
            <GameControls
              session={game.session}
              difficulty={game.activeDifficulty}
              elapsedSeconds={timer.elapsedSeconds}
              message={
                !game.retryLabel && transientNotice ? undefined : game.message
              }
              retryLabel={game.retryLabel}
              retryAction={game.retryAction}
              busy={game.busy}
              hintOperation={
                game.activeTransaction === 'applying-hint'
                  ? 'applying-hint'
                  : game.hintPreparation
              }
              paused={timer.paused}
              canUndo={canUndo}
              canRedo={canRedo}
              historyTransition={game.historyTransition}
              notesMode={board.notesMode}
              setNotesMode={board.setNotesMode}
              allCandidatesVisible={board.allCandidatesVisible}
              setAllCandidatesVisible={board.setAllCandidatesVisible}
              completedDigits={board.completedDigits}
              selectedCellBlocksDigitInput={board.selectedCellBlocksDigitInput}
              selectedCellCanErase={board.selectedCellCanErase}
              enterDigit={board.enterDigit}
              clearSelected={board.clearSelected}
              applyAction={game.applyAction}
              requestHint={() => void requestHint()}
              hintPreview={hintPreview}
              hintStepIndex={hintStepIndex}
              setHintStepIndex={setHintStepIndex}
              applyHint={() => void applyHint()}
              closeHint={closeHint}
              startGame={(difficulty) => void startGame(difficulty)}
              replayGame={() => void replayGame()}
              leaveGame={leaveGame}
              completionHeading={completionHeading}
            />
          </div>

          {transientNotice && (
            <p className="game-notice" role="status">
              {formatReference(transientNotice)}
            </p>
          )}

          {confirmationAction && (
            <ConfirmationDialog
              action={confirmationAction}
              nextDifficulty={nextDifficulty}
              setNextDifficulty={setNextDifficulty}
              dismiss={dismissConfirmation}
              replay={() => void replayGame()}
              confirm={() => {
                if (confirmationAction === 'home') {
                  void leaveGame();
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
