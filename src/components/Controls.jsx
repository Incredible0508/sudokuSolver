import React from 'react';

export default function Controls({ onNewGame, onSolve, onClear, difficulty, setDifficulty }) {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="flex gap-4">
        <button
          onClick={onNewGame}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition-colors"
        >
          New Game
        </button>
        <button
          onClick={onClear}
          className="px-6 py-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-lg shadow-md transition-colors"
        >
          Clear Board
        </button>
        <button
          onClick={onSolve}
          className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md transition-colors"
        >
          Solve for Me
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-slate-300 font-medium">Difficulty:</span>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="bg-slate-700 text-white px-3 py-1 rounded-md border border-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
}