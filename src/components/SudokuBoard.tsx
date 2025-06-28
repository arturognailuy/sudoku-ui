import React, { useState, useEffect } from 'react';
import './SudokuBoard.css';
import { generateSudoku, isValid } from '../utils/sudoku';

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState<number[][]>([]);
  const [initialBoard, setInitialBoard] = useState<number[][]>([]);
  const [invalidCells, setInvalidCells] = useState<Set<string>>(new Set());

  useEffect(() => {
    const newBoard = generateSudoku(40);
    setBoard(newBoard);
    setInitialBoard(JSON.parse(JSON.stringify(newBoard))); // Deep copy
    setInvalidCells(new Set()); // Clear invalid cells on new game
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const inputValue = e.target.value; // What the user just typed in the input field

    let newCellValue: number;

    if (inputValue === '') {
      newCellValue = 0; // User cleared the cell
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

    // Create a new board based on the determined newCellValue
    const updatedBoard = board.map((r, rIdx) =>
      r.map((c, cIdx) => (rIdx === row && cIdx === col ? newCellValue : c))
    );

    setBoard(updatedBoard);

    // Now, check validity and update invalidCells based on the new board state
    // Only check validity if the newCellValue is not 0 (i.e., a number was entered)
    if (newCellValue !== 0 && !isValid(updatedBoard, row, col, newCellValue)) {
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
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => {
            const isInitial = initialBoard[rowIndex][colIndex] !== 0;
            const isInvalid = invalidCells.has(`${rowIndex}-${colIndex}`);
            return (
              <div
                key={colIndex}
                className={`sudoku-cell 
                  ${(colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'right-border' : ''}
                  ${(rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'bottom-border' : ''}
                  ${isInitial ? 'initial-cell' : 'editable-cell'}
                  ${isInvalid ? 'invalid-cell' : ''}
                `}
              >
                {isInitial ? (
                  cell
                ) : (
                  <input
                    type="text"
                    value={cell === 0 ? '' : cell}
                    onChange={(e) => handleChange(e, rowIndex, colIndex)}
                    disabled={invalidCells.size > 0 && !isInvalid} // Disable if any invalid cell exists AND this is not the invalid cell
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;
