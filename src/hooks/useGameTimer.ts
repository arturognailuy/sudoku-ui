import { useCallback, useEffect, useRef, useState } from 'react';
import type { Difficulty } from '../api/types';
import {
  ACTIVE_GAME_KEY,
  type ActiveGameRecord,
  type ConfirmationAction,
} from '../presentation';

interface UseGameTimerOptions {
  activeSessionId?: string;
  difficulty: Difficulty;
  preparing: boolean;
  confirmationAction?: ConfirmationAction;
  solved: boolean;
  restoredGame?: ActiveGameRecord;
}

export const useGameTimer = ({
  activeSessionId,
  difficulty,
  preparing,
  confirmationAction,
  solved,
  restoredGame,
}: UseGameTimerOptions) => {
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const appliedSessionPresentation = useRef<string | undefined>(undefined);

  useEffect(() => {
    const handleVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!activeSessionId) return;
    const restoring = restoredGame?.sessionId === activeSessionId;
    const presentationKey = `${restoring ? 'restore' : 'new'}:${activeSessionId}`;
    if (appliedSessionPresentation.current === presentationKey) return;
    appliedSessionPresentation.current = presentationKey;

    if (!restoring) {
      setPaused(false);
      setElapsedSeconds(0);
      return;
    }

    setPaused(restoredGame.paused);
    let elapsedSinceResume = 0;
    if (!restoredGame.paused && restoredGame.resumedAt) {
      elapsedSinceResume = Math.max(
        0,
        Math.floor((Date.now() - restoredGame.resumedAt) / 1000),
      );
    }
    setElapsedSeconds(restoredGame.elapsedSeconds + elapsedSinceResume);
  }, [activeSessionId, restoredGame]);

  const timerSuspended =
    paused ||
    preparing ||
    confirmationAction !== undefined ||
    !pageVisible ||
    solved;

  useEffect(() => {
    if (!activeSessionId || timerSuspended) return;
    const timer = window.setInterval(
      () => setElapsedSeconds((current) => current + 1),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [activeSessionId, timerSuspended]);

  useEffect(() => {
    if (!activeSessionId) return;
    const record: ActiveGameRecord = {
      sessionId: activeSessionId,
      difficulty,
      elapsedSeconds,
      paused,
      resumedAt: timerSuspended ? undefined : Date.now(),
    };
    localStorage.setItem(ACTIVE_GAME_KEY, JSON.stringify(record));
  }, [activeSessionId, difficulty, elapsedSeconds, paused, timerSuspended]);

  const resetTimer = useCallback(() => {
    appliedSessionPresentation.current = undefined;
    setPaused(false);
    setElapsedSeconds(0);
  }, []);

  return {
    paused,
    setPaused,
    elapsedSeconds,
    resetTimer,
  };
};
