import React from 'react';

export default function Controls({ onNewGame, onSolve, onClear, difficulty, setDifficulty }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Button Group */}
      <div className="flex">
        <button
          onClick={onNewGame}
          className="px-4 py-1.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-medium rounded-l transition-colors"
        >
          Generate
        </button>
        <button
          onClick={onSolve}
          title="Solve current board"
          className="px-4 py-1.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-medium transition-colors border-l border-[#0369a1]"
        >
          Solve
        </button>
        <button
          onClick={onClear}
          className="px-4 py-1.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-medium rounded-r transition-colors border-l border-[#0369a1]"
        >
          Clear
        </button>
      </div>

      {/* Difficulty Selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">Difficulty:</span>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="bg-[#1e293b] text-sm text-white px-2 py-1 rounded border border-gray-600 focus:outline-none focus:border-[#38bdf8] cursor-pointer"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
}