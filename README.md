# Tic Tac Toe

A simple Tic Tac Toe game built with React and Vite.

## Live Demo

Deployed at: https://Shubhamxgit.github.io/Tic_Tak_Toe

## Features

- 3x3 interactive game board
- Alternating turns between `O` and `X`
- Winner detection for rows, columns, and diagonals
- Toast notification when a player wins
- Restart button after game completion

## Tech Stack

- React
- Vite
- react-icons
- react-toastify
- ESLint

## Project Structure

```text
src/
  App.jsx
components/
  card/
  grid/
  icon/
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks
- `npm run deploy` - deploy `dist` to GitHub Pages

## Deployment

This project is configured for GitHub Pages using the `gh-pages` package and the `homepage` value in `package.json`.
