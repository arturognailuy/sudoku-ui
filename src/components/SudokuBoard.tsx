import React, { useState, useEffect } from 'react';
import './SudokuBoard.css';
import { generateSudoku } from '../utils/sudoku';

interface SudokuBoardProps {
  onGameSolved: (isSolved: boolean) => void;
  isPaused: boolean;
  wrongAttempts: number;
  maxWrongAttempts: number;
  setWrongAttempts: React.Dispatch<React.SetStateAction<number>>;
  hintsUsed: number;
  setHintsUsed: React.Dispatch<React.SetStateAction<number>>;
  maxHints: number;
  triggerHint: boolean;
  setTriggerHint: React.Dispatch<React.SetStateAction<boolean>>;
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({
  onGameSolved,
  isPaused,
  wrongAttempts,
  maxWrongAttempts,
  setWrongAttempts,
  hintsUsed,
  setHintsUsed,
  maxHints,
  triggerHint,
  setTriggerHint,
}) => {
  const [board, setBoard] = useState<number[][]>([]);
  const [initialBoard, setInitialBoard] = useState<number[][]>([]);
  const [solvedBoard, setSolvedBoard] = useState<number[][]>([]);
  const [invalidCells, setInvalidCells] = useState<Set<string>>(new Set());
  const [focusedCell, setFocusedCell] = useState<string | null>(null);
  const [focusedNumber, setFocusedNumber] = useState<number | null>(null);
  const [isGameSolved, setIsGameSolved] = useState(false); // Internal state for game solved status
  const [isGameOver, setIsGameOver] = useState(false); // New state for game over (lost)

  // Effect to generate a new game when the component mounts or gameId changes (via key prop)
  useEffect(() => {
    const { puzzle, solvedBoard } = generateSudoku(40);
    setBoard(puzzle);
    setInitialBoard(JSON.parse(JSON.stringify(puzzle))); // Deep copy
    setSolvedBoard(solvedBoard);
    setInvalidCells(new Set());
    setIsGameSolved(false); // Reset game solved status for new game
    setIsGameOver(false); // Reset game over status for new game
    setWrongAttempts(0); // Reset wrong attempts on new game
    setHintsUsed(0); // Reset hints used on new game
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this runs once on mount

  // Effect to check if the game is solved or lost
  useEffect(() => {
    if (board.length === 0 || solvedBoard.length === 0) return; // Board not yet initialized

    const allCellsFilled = board.every(row => row.every(cell => cell !== 0));
    const allCorrect = board.every((row, rIdx) =>
      row.every((cell, cIdx) => cell === solvedBoard[rIdx][cIdx]),
    );

    if (allCellsFilled && allCorrect && invalidCells.size === 0) {
      setIsGameSolved(true);
      setIsGameOver(false); // Ensure not game over if solved
      onGameSolved(true); // Communicate to parent
    } else if (wrongAttempts > 0 && wrongAttempts >= maxWrongAttempts) {
      setIsGameSolved(false); // Ensure not solved if game over
      setIsGameOver(true); // Game over due to max wrong attempts
      onGameSolved(true); // Communicate to parent (game is over)
    } else {
      setIsGameSolved(false);
      setIsGameOver(false);
      onGameSolved(false);
    }
  }, [board, solvedBoard, invalidCells, onGameSolved, wrongAttempts, maxWrongAttempts]);

  // Effect to handle hint requests
  useEffect(() => {
    if (triggerHint) { // Only proceed if triggerHint is true
      if (solvedBoard.length > 0 && hintsUsed < maxHints) {
        setHintsUsed(prev => prev + 1); // Increment hints used
        setBoard(prevBoard => {
          const emptyCells: [number, number][] = [];
          for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
              if (prevBoard[r][c] === 0) {
                emptyCells.push([r, c]);
              }
            }
          }

          if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const [hintRow, hintCol] = emptyCells[randomIndex];
            const correctValue = solvedBoard[hintRow][hintCol];

            const newBoard = prevBoard.map((r, rIdx) =>
              r.map((c, cIdx) => (rIdx === hintRow && cIdx === hintCol ? correctValue : c)),
            );

            setInvalidCells(prev => {
              const newSet = new Set(prev);
              newSet.delete(`${hintRow}-${hintCol}`);
              return newSet;
            });
            return newBoard;
          }
          return prevBoard; // No empty cells or no hint applied
        });
      }
      setTriggerHint(false); // Reset trigger after hint is processed (or not)
    }
  }, [triggerHint, solvedBoard, hintsUsed, maxHints, setHintsUsed, setTriggerHint]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    if (isGameSolved || isPaused || isGameOver) return; // Prevent input after game is solved, paused, or lost

    const inputValue = e.target.value;
    let newCellValue: number;

    if (inputValue === '') {
      newCellValue = 0;
    } else {
      // Take only the last character if multiple were typed (for overwriting)
      const lastChar = inputValue.slice(-1);
      const parsedNum = parseInt(lastChar, 10);

      // Check if it's a single digit from 1 to 9
      if (parsedNum >= 1 && parsedNum <= 9 && lastChar.length === 1) {
        newCellValue = parsedNum; // Valid single digit input
      } else {
        // If input is invalid (e.g., "0", "a", etc.), revert to previous valid state.
        newCellValue = board[row][col];
      }
    }

    const updatedBoard = board.map((r, rIdx) =>
      r.map((c, cIdx) => (rIdx === row && cIdx === col ? newCellValue : c)),
    );

    // Check if the new value is incorrect and different from the old value
    const oldCellValue = board[row][col];
    if (newCellValue !== 0 && newCellValue !== solvedBoard[row][col]) {
      // Only increment wrong attempts if it's a new incorrect entry or a change from a correct/empty cell
      if (oldCellValue === 0 || oldCellValue === solvedBoard[row][col] || (oldCellValue !== solvedBoard[row][col] && newCellValue !== oldCellValue)) {
        setWrongAttempts(prev => prev + 1); // Increment wrong attempts
      }
      setInvalidCells(prev => new Set(prev).add(`${row}-${col}`));
    } else {
      setInvalidCells(prev => {
        const newSet = new Set(prev);
        newSet.delete(`${row}-${col}`);
        return newSet;
      });
    }

    setBoard(updatedBoard);
  };

  return (
    <div className="sudoku-board-container">
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => {
              const isInitial = initialBoard[rowIndex][colIndex] !== 0;
              const isInvalid = invalidCells.has(`${rowIndex}-${colIndex}`);
              const isFocused = focusedCell === `${rowIndex}-${colIndex}`;
              const isHighlightedNumber = focusedNumber !== null && cell === focusedNumber && cell !== 0;

              let isHighlightedArea = false;
              if (focusedCell) {
                const [focusedRow, focusedCol] = focusedCell.split('-').map(Number);
                const inSameRow = rowIndex === focusedRow;
                const inSameCol = colIndex === focusedCol;

                const focusedBlockRow = Math.floor(focusedRow / 3);
                const focusedBlockCol = Math.floor(colIndex / 3);
                const inSameBlock = Math.floor(rowIndex / 3) === focusedBlockRow && Math.floor(colIndex / 3) === focusedBlockCol;

                isHighlightedArea = inSameRow || inSameCol || inSameBlock;
              }

              return (
                <div
                  key={colIndex}
                  tabIndex={isGameSolved || isPaused || isGameOver ? -1 : 0} // Disable focus if game is solved, paused, or lost
                  onFocus={(e) => {
                    if (isGameSolved || isPaused || isGameOver) return; // Prevent focus if game is solved, paused, or lost
                    setFocusedCell(`${rowIndex}-${colIndex}`);
                    setFocusedNumber(cell === 0 ? null : cell);
                    if (!isInitial) {
                      const inputElement = e.currentTarget.querySelector('input');
                      if (inputElement) {
                        inputElement.focus();
                        inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
                      }
                    }
                  }}
                  onBlur={() => {
                    setFocusedCell(null);
                    setFocusedNumber(null);
                  }}
                  className={`sudoku-cell 
                    ${(colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'right-border' : ''}
                    ${(rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'bottom-border' : ''}
                    ${isInitial ? 'initial-cell' : 'editable-cell'}
                    ${isInvalid ? 'invalid-cell' : ''}
                    ${isHighlightedNumber ? 'highlighted-number' : ''}
                    ${isHighlightedArea && !isInitial ? 'highlighted-area' : ''}
                    ${isFocused && !isInitial ? 'focused-cell' : ''}
                  `}
                >
                  {isInitial ? (
                    isPaused ? '' : cell
                  ) : (
                    <input
                      type="text"
                      value={isPaused ? '' : (cell === 0 ? '' : cell)}
                      onChange={(e) => handleChange(e, rowIndex, colIndex)}
                      disabled={isGameSolved || isPaused || isGameOver || (invalidCells.size > 0 && !isInvalid)} // Disable input if game is solved, paused, lost, or other invalid cells exist
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {isGameSolved && (
        <div className="congrats-overlay">
          <p>Congratulations!</p>
          <p>You solved the Sudoku!</p>
        </div>
      )}
      {isGameOver && (
        <div className="game-over-overlay">
          <p>Game Over!</p>
        </div>
      )}
      {isPaused && (
        <div className="pause-overlay">
          <p>Game Paused</p>
        </div>
      )}
    </div>
  );
};


export default SudokuBoard;
