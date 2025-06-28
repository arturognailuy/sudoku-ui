import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import Timer from './components/Timer';
import GamePadIcon from './components/icons/GamePadIcon';
import PlayIcon from './components/icons/PlayIcon';
import PauseIcon from './components/icons/PauseIcon';
import LightbulbIcon from './components/icons/LightbulbIcon';
import './App.css';

const App: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  const [isGameSolved, setIsGameSolved] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0); // New state for wrong attempts
  const [maxWrongAttempts] = useState(3); // Configurable max wrong attempts
  const [hintsUsed, setHintsUsed] = useState(0); // New state for hints used
  const [maxHints] = useState(5); // Configurable max hints

  const [triggerHint, setTriggerHint] = useState(false); // New state to trigger hint

  const handleHintRequest = () => {
    setTriggerHint(true);
  };

  return (
    <div className="app-container">
      <h1>Sudoku</h1>
      <div className="toolbar">
        <button onClick={() => setGameId(gameId + 1)} disabled={isPaused} title="New Game">
          <GamePadIcon />
        </button>
        <button onClick={() => setIsPaused(prev => !prev)} title={isPaused ? 'Resume Game' : 'Pause Game'} disabled={isGameSolved}>
          {isPaused ? (
            <PlayIcon />
          ) : (
            <PauseIcon />
          )}
        </button>
        <button onClick={() => setTriggerHint(true)} disabled={isGameSolved || isPaused || wrongAttempts >= maxWrongAttempts || hintsUsed >= maxHints} title="Get Hint">
          <LightbulbIcon />
          <span className="hint-count">{maxHints - hintsUsed}</span>
        </button>
        <div className="game-stats">
          <span>Mistakes: {wrongAttempts}/{maxWrongAttempts}</span>
        </div>
        <Timer isPaused={isPaused} isGameSolved={isGameSolved} gameId={gameId} />
      </div>
      <SudokuBoard 
        key={gameId} 
        onGameSolved={setIsGameSolved} 
        isPaused={isPaused}
        wrongAttempts={wrongAttempts}
        maxWrongAttempts={maxWrongAttempts}
        setWrongAttempts={setWrongAttempts}
        hintsUsed={hintsUsed}
        setHintsUsed={setHintsUsed}
        triggerHint={triggerHint}
        setTriggerHint={setTriggerHint}
        maxHints={maxHints}
      />
    </div>
  );
};


export default App;
