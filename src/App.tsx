import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import Timer from './components/Timer'; // Import Timer component
import './App.css';

const App: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  const [hintTrigger, setHintTrigger] = useState(0);
  const [isGameSolved, setIsGameSolved] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="app-container">
      <h1>Sudoku</h1>
      <div className="toolbar">
        <button onClick={() => setGameId(gameId + 1)} disabled={isPaused} title="New Game">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gamepad"><path d="M15 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"></path><path d="M12 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path><path d="M9 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"></path><path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zM8 13.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM15 13.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path></svg>
        </button>
        <button onClick={() => setIsPaused(prev => !prev)} title={isPaused ? 'Resume Game' : 'Pause Game'}>
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          )}
        </button>
        <button onClick={() => setHintTrigger(prev => prev + 1)} disabled={isGameSolved || isPaused} title="Get Hint">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lightbulb"><path d="M9 18h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9a2 0 0 0-2 2v2a2 2 0 0 0 2 2z"></path><path d="M12 22v-4"></path><path d="M12 2C7.8 2 4.2 4.8 3 9c-.5 2.5.5 4.5 2 6 .5.5 1 .8 1.5 1 .5.2 1 .3 1.5.3H16c.5 0 1-.1 1.5-.3.5-.2 1-.5 1.5-1 1.5-1.5 2.5-3.5 2-6C19.8 4.8 16.2 2 12 2z"></path></svg>
        </button>
        <Timer isPaused={isPaused} isGameSolved={isGameSolved} gameId={gameId} />
      </div>
      <SudokuBoard key={gameId} hintTrigger={hintTrigger} onGameSolved={setIsGameSolved} isPaused={isPaused} />
    </div>
  );
};

export default App;