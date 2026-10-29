import React, { useState, useEffect } from 'react';
import SudokuGrid from './components/SudokuGrid';
import Controls from './components/Controls';
import { generatePuzzle } from './utils/generator';
import { solveSudoku } from './solver';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [initialBoard, setInitialBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [difficulty, setDifficulty] = useState('medium'); // Added back

  const startNewGame = () => {
    const newPuzzle = generatePuzzle(difficulty); // Now uses the dropdown value
    setBoard(newPuzzle.map(row => [...row]));
    setInitialBoard(newPuzzle.map(row => [...row]));
  };

  const clearBoard = () => {
    const empty = Array(9).fill(null).map(() => Array(9).fill(0));
    setBoard(empty);
    setInitialBoard(empty); 
  };

  // Automatically start a new game when difficulty changes
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
    const solved = solveSudoku(board); 
    if (solved) {
      setBoard(solved);
    } else {
      alert("Error: Board is unsolvable. Check for incorrect numbers!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-start justify-center">
        
        {/* Left Column */}
        <div className="flex-1 max-w-sm pt-4">
          <h1 className="text-3xl font-bold text-white mb-6">Sudoku Solver</h1>
          
          <p className="mb-4 text-sm text-gray-300 leading-relaxed">
            This is a simple sudoku solver that implements a <span className="text-[#38bdf8] hover:underline cursor-pointer">backtracking algorithm</span> using JavaScript.
          </p>
          
          <p className="mb-8 text-sm text-gray-300 leading-relaxed">
            The frontend is made with HTML tables, Pico CSS, and Flexbox Grid. Boards are fetched using <span className="text-[#38bdf8] hover:underline cursor-pointer">dosoku api</span>
          </p>
          
          <Controls 
            onNewGame={startNewGame} 
            onSolve={handleSolve} 
            onClear={clearBoard}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <SudokuGrid 
            board={board} 
            initialBoard={initialBoard} 
            onCellChange={handleCellChange} 
          />
          <p className="mt-4 text-[11px] text-gray-400 max-w-[350px] text-center">
            You can also edit the board btw, just make sure you input valid values...
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
