import React from 'react';

export default function SudokuGrid({ board, initialBoard, onCellChange }) {
  return (
    <div className="inline-block border-2 border-gray-400 bg-transparent">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2 border-gray-400' : 'border-b border-gray-600'}`}>
          {row.map((cell, colIndex) => {
            const isInitial = initialBoard[rowIndex][colIndex] !== 0;
            return (
              <input
                key={colIndex}
                type="text"
                maxLength="1"
                value={cell === 0 ? '' : cell}
                onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)}
                readOnly={isInitial}
                className={`w-12 h-12 sm:w-16 sm:h-16 text-center text-2xl sm:text-4xl font-sans font-medium outline-none bg-transparent cursor-default
                  ${colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2 border-gray-400' : 'border-r border-gray-600'}
                  ${isInitial ? 'text-[#38bdf8]' : 'text-white'}
                `}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}