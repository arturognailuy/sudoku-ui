import React, { useState, useEffect, useCallback } from 'react';
import './SudokuBoard.css';
import { generateSudoku, isValid } from '../utils/sudoku';

interface SudokuBoardProps {
  hintTrigger: number;
  onGameSolved: (isSolved: boolean) => void; // New prop to communicate solved state
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({ hintTrigger, onGameSolved }) => {
  const [board, setBoard] = useState<number[][]>([]);
  const [initialBoard, setInitialBoard] = useState<number[][]>([]);
  const [solvedBoard, setSolvedBoard] = useState<number[][]>([]);
  const [invalidCells, setInvalidCells] = useState<Set<string>>(new Set());
  const [focusedCell, setFocusedCell] = useState<string | null>(null);
  const [focusedNumber, setFocusedNumber] = useState<number | null>(null);
  const [isGameSolved, setIsGameSolved] = useState(false); // New state for game solved status

  // Effect to generate a new game when the component mounts or gameId changes (via key prop)
  useEffect(() => {
    const { puzzle, solvedBoard } = generateSudoku(40);
    setBoard(puzzle);
    setInitialBoard(JSON.parse(JSON.stringify(puzzle))); // Deep copy
    setSolvedBoard(solvedBoard);
    setInvalidCells(new Set());
    setIsGameSolved(false); // Reset game solved status for new game
  }, []);

  // Effect to check if the game is solved
  useEffect(() => {
    if (board.length === 0 || solvedBoard.length === 0) return; // Board not yet initialized

    const allCellsFilled = board.every(row => row.every(cell => cell !== 0));
    const allCorrect = board.every((row, rIdx) =>
      row.every((cell, cIdx) => cell === solvedBoard[rIdx][cIdx])
    );

    if (allCellsFilled && allCorrect && invalidCells.size === 0) {
      setIsGameSolved(true);
      onGameSolved(true); // Communicate to parent
    } else {
      setIsGameSolved(false);
      onGameSolved(false); // Communicate to parent
    }
  }, [board, solvedBoard, invalidCells, onGameSolved]);

  // Effect to handle hint requests
  useEffect(() => {
    if (hintTrigger > 0 && solvedBoard.length > 0) {
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
            r.map((c, cIdx) => (rIdx === hintRow && cIdx === hintCol ? correctValue : c))
          );

          setInvalidCells(prev => {
            const newSet = new Set(prev);
            newSet.delete(`${hintRow}-${hintCol}`);
            return newSet;
          });
          return newBoard;
        }
        return prevBoard;
      });
    }
  }, [hintTrigger, solvedBoard]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    if (isGameSolved) return; // Prevent input after game is solved

    const inputValue = e.target.value;
    let newCellValue: number;

    if (inputValue === '') {
      newCellValue = 0;
    } else {
      const lastChar = inputValue.slice(-1);
      const parsedNum = parseInt(lastChar, 10);

      if (parsedNum >= 1 && parsedNum <= 9 && lastChar.length === 1) {
        newCellValue = parsedNum;
      } else {
        newCellValue = board[row][col];
      }
    }

    const updatedBoard = board.map((r, rIdx) =>
      r.map((c, cIdx) => (rIdx === row && cIdx === col ? newCellValue : c))
    );

    setBoard(updatedBoard);

    if (newCellValue !== 0 && newCellValue !== solvedBoard[row][col]) {
      setInvalidCells(prev => new Set(prev).add(`${row}-${col}`));
    } else {
      setInvalidCells(prev => {
        const newSet = new Set(prev);
        newSet.delete(`${row}-${col}`);
        return newSet;
      });
    }
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
                const focusedBlockCol = Math.floor(focusedCol / 3);
                const inSameBlock = Math.floor(rowIndex / 3) === focusedBlockRow && Math.floor(colIndex / 3) === focusedBlockCol;

                isHighlightedArea = inSameRow || inSameCol || inSameBlock;
              }

              return (
                <div
                  key={colIndex}
                  tabIndex={isGameSolved ? -1 : 0} // Disable focus if game is solved
                  onFocus={(e) => {
                    if (isGameSolved) return; // Prevent focus if game is solved
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
                    ${isHighlightedArea ? 'highlighted-area' : ''}
                    ${isHighlightedNumber ? 'highlighted-number' : ''}
                    ${isFocused ? 'focused-cell' : ''}
                  `}
                >
                  {isInitial ? (
                    cell
                  ) : (
                    <input
                      type="text"
                      value={cell === 0 ? '' : cell}
                      onChange={(e) => handleChange(e, rowIndex, colIndex)}
                      disabled={isGameSolved || (invalidCells.size > 0 && !isInvalid)} // Disable input if game is solved or other invalid cells exist
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
    </div>
  );
};


export default SudokuBoard;
