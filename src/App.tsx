import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import './App.css';

const App: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  const [hintTrigger, setHintTrigger] = useState(0);
  const [isGameSolved, setIsGameSolved] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New state for pause functionality

  return (
    <div className="app-container">
      <h1>Sudoku</h1>
      <div className="toolbar">
        <button onClick={() => setGameId(gameId + 1)} disabled={isPaused}>New</button>
        <button onClick={() => setIsPaused(prev => !prev)}>{isPaused ? 'Resume' : 'Pause'}</button>
        <button onClick={() => setHintTrigger(prev => prev + 1)} disabled={isGameSolved || isPaused}>Hint</button>
      </div>
      <SudokuBoard key={gameId} hintTrigger={hintTrigger} onGameSolved={setIsGameSolved} isPaused={isPaused} />
    </div>
  );
};

export default App;