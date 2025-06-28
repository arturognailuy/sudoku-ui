import React, { useState, useEffect, useCallback } from 'react';
import './SudokuBoard.css';
import { generateSudoku, isValid } from '../utils/sudoku';

interface SudokuBoardProps {
  hintTrigger: number;
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({ hintTrigger }) => {
  const [board, setBoard] = useState<number[][]>([]);
  const [initialBoard, setInitialBoard] = useState<number[][]>([]);
  const [solvedBoard, setSolvedBoard] = useState<number[][]>([]);
  const [invalidCells, setInvalidCells] = useState<Set<string>>(new Set());
  const [focusedCell, setFocusedCell] = useState<string | null>(null);
  const [focusedNumber, setFocusedNumber] = useState<number | null>(null);

  // Effect to generate a new game when the component mounts or gameId changes (via key prop)
  useEffect(() => {
    const { puzzle, solvedBoard } = generateSudoku(40);
    setBoard(puzzle);
    setInitialBoard(JSON.parse(JSON.stringify(puzzle))); // Deep copy
    setSolvedBoard(solvedBoard);
    setInvalidCells(new Set());
  }, []); // Empty dependency array means this runs once on mount

  // Effect to handle hint requests
  useEffect(() => {
    if (hintTrigger > 0) { // Only run if hintTrigger has been incremented
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
          const correctValue = solvedBoard[hintRow][hintCol]; // solvedBoard is stable after initial generation

          const newBoard = prevBoard.map((r, rIdx) =>
            r.map((c, cIdx) => (rIdx === hintRow && cIdx === hintCol ? correctValue : c))
          );

          // Remove from invalidCells if it was previously invalid
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
  }, [hintTrigger, solvedBoard]); // Dependencies for hint effect: only hintTrigger and solvedBoard (which is stable)

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

    // Update focusedNumber based on the new cell value
    if (newCellValue !== 0) {
      setFocusedNumber(newCellValue);
    } else {
      setFocusedNumber(null);
    }

    // Now, check correctness and update invalidCells
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
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => {
            const isInitial = initialBoard[rowIndex][colIndex] !== 0;
            const isInvalid = invalidCells.has(`${rowIndex}-${colIndex}`);
            const isFocused = focusedCell === `${rowIndex}-${colIndex}`;
            const isHighlightedNumber = focusedNumber !== null && cell === focusedNumber && cell !== 0;

            // Calculate if the cell is in the same row, column, or 3x3 block as the focused cell
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
                tabIndex={0} // Make the cell div focusable
                onFocus={(e) => {
                  setFocusedCell(`${rowIndex}-${colIndex}`);
                  setFocusedNumber(cell === 0 ? null : cell);
                  // If it's an editable cell, focus the input inside
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
                  ${!isInitial && isHighlightedArea ? 'highlighted-area' : ''}
                  ${isHighlightedNumber ? 'highlighted-number' : ''}
                  ${!isInitial && isFocused ? 'focused-cell' : ''}
                `}
              >
                {isInitial ? (
                  cell
                ) : (
                  <input
                    type="text"
                    value={cell === 0 ? '' : cell}
                    onChange={(e) => handleChange(e, rowIndex, colIndex)}
                    // onFocus and onBlur are now handled by the parent div
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
