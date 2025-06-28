import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import './App.css';

const App: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  const [hintTrigger, setHintTrigger] = useState(0);

  return (
    <div className="app-container">
      <h1>Sudoku</h1>
      <div className="toolbar">
        <button onClick={() => setGameId(gameId + 1)}>New</button>
        <button onClick={() => setHintTrigger(prev => prev + 1)}>Hint</button>
      </div>
      <SudokuBoard key={gameId} hintTrigger={hintTrigger} />
    </div>
  );
};

export default App;