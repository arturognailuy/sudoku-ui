export const generateSudoku = (difficulty: number) => {
  const board = Array(9).fill(null).map(() => Array(9).fill(0));

  const solve = (board: number[][]) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          shuffle(nums);
          for (const num of nums) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (solve(board)) {
                return true;
              } else {
                board[row][col] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  solve(board);

  // Create a copy of the solved board to remove numbers from
  const puzzle = board.map(row => [...row]);
  const cells = Array.from({ length: 81 }, (_, i) => i);
  shuffle(cells);

  let removedCount = 0;
  for (const cellIndex of cells) {
    if (removedCount >= difficulty) break;

    const row = Math.floor(cellIndex / 9);
    const col = cellIndex % 9;

    if (puzzle[row][col] !== 0) {
      const originalValue = puzzle[row][col];
      puzzle[row][col] = 0; // Temporarily remove the number

      // Check if the puzzle still has a unique solution
      if (countSolutions(puzzle) !== 1) {
        puzzle[row][col] = originalValue; // If not unique, put it back
      } else {
        removedCount++;
      }
    }
  }

  return { puzzle, solvedBoard: board };
};

export const isValid = (board: number[][], row: number, col: number, num: number) => {
  for (let i = 0; i < 9; i++) {
    if (i !== col && board[row][i] === num) {
      return false;
    }
    if (i !== row && board[i][col] === num) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if ((startRow + i !== row || startCol + j !== col) && board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
};

const countSolutions = (board: number[][]): number => {
  let solutions = 0;
  const tempBoard = board.map(row => [...row]); // Create a deep copy to avoid modifying the original board

  const solveAndCount = (currentBoard: number[][]) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (currentBoard[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(currentBoard, row, col, num)) {
              currentBoard[row][col] = num;
              solveAndCount(currentBoard);
              currentBoard[row][col] = 0; // Backtrack
            }
          }
          return;
        }
      }
    }
    solutions++;
  };

  solveAndCount(tempBoard);
  return solutions;
};

const shuffle = (array: unknown[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
