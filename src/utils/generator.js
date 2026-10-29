import { isValid } from '../solver';

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const generateFullBoard = () => {
  const grid = Array(9).fill(null).map(() => Array(9).fill(0));

  const fill = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          for (let num of numbers) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (fill()) return true;
              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  fill();
  return grid;
};

export const generatePuzzle = (difficulty = 'medium') => {
  const fullBoard = generateFullBoard();
  const puzzle = fullBoard.map((row) => [...row]);

  let removals = 42;
  if (difficulty === 'easy') removals = 34;
  if (difficulty === 'medium') removals = 44;
  if (difficulty === 'hard') removals = 52;

  let cleared = 0;
  while (cleared < removals) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (puzzle[row][col] !== 0) {
      puzzle[row][col] = 0;
      cleared++;
    }
  }

  return puzzle;
};