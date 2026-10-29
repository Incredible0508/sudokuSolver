import React from 'react';

export default function SudokuGrid({ board, initialBoard, onCellChange }) {
  return (
    <div className="grid grid-cols-9 gap-1 bg-slate-700 p-2 rounded-xl shadow-2xl border border-slate-600 max-w-md mx-auto">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isInitial = initialBoard[rowIndex][colIndex] !== 0;
          
          const borderRight = (colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'border-r-2 border-r-slate-400' : '';
          const borderBottom = (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'border-b-2 border-b-slate-400' : '';

          return (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={cell === 0 ? '' : cell}
              readOnly={isInitial}
              onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)}
              className={`w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${borderRight} ${borderBottom} ${
                isInitial
                  ? 'bg-slate-800 text-indigo-300 font-bold cursor-not-allowed'
                  : 'bg-slate-900 text-slate-100 hover:bg-slate-700 focus:bg-slate-700'
              }`}
            />
          );
        })
      )}
    </div>
  );
}