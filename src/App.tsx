import React from 'react';
import SudokuBoard from './components/SudokuBoard';
import './App.css';

const App: React.FC = () => {
  const [gameId, setGameId] = React.useState(1);

  return (
    <div className="app-container">
      <h1>Sudoku</h1>
      <button onClick={() => setGameId(gameId + 1)}>New Game</button>
      <SudokuBoard key={gameId} />
    </div>
  );
};

export default App;