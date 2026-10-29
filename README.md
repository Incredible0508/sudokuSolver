# React Sudoku Solver & Generator

A lightning-fast Sudoku solver and puzzle generator built with React and Tailwind CSS. This project features a custom recursive backtracking algorithm that can solve any valid Sudoku puzzle in milliseconds.

## Features
* **Backtracking Engine**: Instantly solves any valid board state.
* **Dynamic Puzzle Generation**: Creates unique, playable puzzles on the fly.
* **Difficulty Levels**: Choose between Easy, Medium, and Hard (adjusts the number of missing clues).
* **Manual Entry Mode**: Clear the board and input puzzles from real life to have the algorithm solve them for you.
* **Responsive UI**: Built with Tailwind CSS for a clean, modern experience on desktop and mobile.

## Tech Stack
* React
* Vite
* Tailwind CSS

## How to Run Locally

1. Clone this repository.
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev

## Algorithm Details
The core solver uses a Depth-First Search (DFS) recursive backtracking algorithm. It scans the 9x9 grid for empty cells, guesses a valid number (1-9) based on row/column/subgrid constraints, and recurses forward. If it hits a dead end, it backtracks, erasing incorrect guesses until the full board is successfully populated.