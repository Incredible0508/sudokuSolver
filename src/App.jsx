import React, { useState, useEffect } from 'react';
import SudokuGrid from './components/SudokuGrid';
import Controls from './components/Controls';
import { generatePuzzle } from './utils/generator';
import { solveSudoku } from './solver';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [initialBoard, setInitialBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [difficulty, setDifficulty] = useState('medium');

  const startNewGame = () => {
    const newPuzzle = generatePuzzle(difficulty);
    setBoard(newPuzzle.map(row => [...row]));
    setInitialBoard(newPuzzle.map(row => [...row]));
  };

  // Wipes the board clean and unlocks all cells for manual typing
  const clearBoard = () => {
    const empty = Array(9).fill(null).map(() => Array(9).fill(0));
    setBoard(empty);
    setInitialBoard(empty); 
  };

  useEffect(() => {
    startNewGame();
  }, [difficulty]);

  const handleCellChange = (row, col, value) => {
    const val = value === '' ? 0 : parseInt(value, 10);
    if (Number.isNaN(val) || val < 0 || val > 9) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = val;
    setBoard(newBoard);
  };

  const handleSolve = () => {
    // Now passes the CURRENT board state instead of the locked initial board
    const solved = solveSudoku(board); 
    if (solved) {
      setBoard(solved);
    } else {
      alert("Error: Board is unsolvable. Check for incorrect numbers!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-white tracking-wide mb-8">
        Sudoku Solver
      </h1>
      
      <SudokuGrid 
        board={board} 
        initialBoard={initialBoard} 
        onCellChange={handleCellChange} 
      />
      
      <Controls 
        onNewGame={startNewGame} 
        onSolve={handleSolve} 
        onClear={clearBoard}
        difficulty={difficulty} 
        setDifficulty={setDifficulty} 
      />
    </div>
  );
}

export default App;
