import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import Timer from './components/Timer';
import GamePadIcon from './components/icons/GamePadIcon';
import PlayIcon from './components/icons/PlayIcon';
import PauseIcon from './components/icons/PauseIcon';
import LightbulbIcon from './components/icons/LightbulbIcon';
import SettingsIcon from './components/icons/SettingsIcon'; // Import SettingsIcon
import Settings from './components/Settings'; // Import Settings component
import './App.css';

const App: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  const [isGameSolved, setIsGameSolved] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [maxWrongAttempts, setMaxWrongAttempts] = useState(3); // Now with setter
  const [hintsUsed, setHintsUsed] = useState(0);
  const [maxHints, setMaxHints] = useState(5); // Now with setter

  const [triggerHint, setTriggerHint] = useState(false);
  const [showSettings, setShowSettings] = useState(false); // New state for settings visibility

  const handleHintRequest = () => {
    setTriggerHint(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <div className="app-container">
      <h1>Sudoku</h1>
      <div className="toolbar">
        <button onClick={() => setGameId(gameId + 1)} disabled={isPaused || showSettings} title="New Game">
          <GamePadIcon />
        </button>
        <button onClick={() => setIsPaused(prev => !prev)} title={isPaused ? 'Resume Game' : 'Pause Game'} disabled={isGameSolved || showSettings}>
          {isPaused ? (
            <PlayIcon />
          ) : (
            <PauseIcon />
          )}
        </button>
        <button onClick={handleHintRequest} disabled={isGameSolved || isPaused || (wrongAttempts > 0 && wrongAttempts >= maxWrongAttempts) || hintsUsed >= maxHints || showSettings} title="Get Hint">
          <LightbulbIcon />
          <span className="hint-count">{Math.max(maxHints - hintsUsed, 0)}</span>
        </button>
        <button onClick={() => setShowSettings(true)} disabled={isPaused || isGameSolved} title="Settings">
          <SettingsIcon />
        </button>
        <div className="game-stats">
          <span>Mistakes: {wrongAttempts}/{maxWrongAttempts}</span>
        </div>
        <Timer isPaused={isPaused || showSettings} isGameSolved={isGameSolved} gameId={gameId} />
      </div>
      <SudokuBoard
        key={gameId}
        onGameSolved={setIsGameSolved}
        isPaused={isPaused || showSettings} // Pause game when settings are open
        wrongAttempts={wrongAttempts}
        maxWrongAttempts={maxWrongAttempts}
        setWrongAttempts={setWrongAttempts}
        hintsUsed={hintsUsed}
        setHintsUsed={setHintsUsed}
        triggerHint={triggerHint}
        setTriggerHint={setTriggerHint}
        maxHints={maxHints}
      />
      {showSettings && (
        <Settings
          maxWrongAttempts={maxWrongAttempts}
          setMaxWrongAttempts={setMaxWrongAttempts}
          maxHints={maxHints}
          setMaxHints={setMaxHints}
          onClose={handleCloseSettings}
        />
      )}
    </div>
  );
};

export default App;
