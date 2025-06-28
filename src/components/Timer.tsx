import React, { useState, useEffect } from 'react';

interface TimerProps {
  isPaused: boolean;
  isGameSolved: boolean;
  gameId: number; // To reset timer on new game
}

const Timer: React.FC<TimerProps> = ({ isPaused, isGameSolved, gameId }) => {
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds

  useEffect(() => {
    setElapsedTime(0); // Reset timer on new game
  }, [gameId]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (!isPaused && !isGameSolved) {
      interval = setInterval(() => {
        setElapsedTime(prevTime => {
          if (prevTime >= 359999) { // Max 99:59:59 (359999 seconds)
            clearInterval(interval!); // Stop timer at max value
            return prevTime;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, isGameSolved, gameId]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="timer">
      {formatTime(elapsedTime)}
    </div>
  );
};

export default Timer;
