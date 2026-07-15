import { getCatalogPuzzle, getCatalogPuzzleCount } from '../constants/puzzle-catalog';
import type { Difficulty, Position } from '../types/game';

type CatalogPuzzle = {
  difficulty: Difficulty;
  size: number;
  grid: string[][];
  words: Array<{ text: string; cells: Position[] }>;
};

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard', 'expert'];

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function verifyWordCells(
  grid: string[][],
  word: { text: string; cells: Position[] },
  difficulty: Difficulty,
  puzzleNumber: number,
): void {
  assert(
    word.cells.length === word.text.length,
    `Cell count mismatch for word ${word.text} in ${difficulty} #${puzzleNumber}`,
  );

  const letters = word.cells.map((cell) => {
    assert(
      cell.row >= 0 && cell.row < grid.length,
      `Word cell row out of range in ${difficulty} #${puzzleNumber}`,
    );
    assert(
      cell.col >= 0 && cell.col < grid.length,
      `Word cell col out of range in ${difficulty} #${puzzleNumber}`,
    );

    return grid[cell.row][cell.col];
  });

  assert(
    letters.join('') === word.text,
    `Grid letters do not match word ${word.text} in ${difficulty} #${puzzleNumber}`,
  );
}

function verifyCatalogPuzzle(difficulty: Difficulty, puzzleNumber: number): void {
  const puzzle = getCatalogPuzzle(difficulty, puzzleNumber) as CatalogPuzzle;

  assert(puzzle.difficulty === difficulty, `Difficulty mismatch in ${difficulty} #${puzzleNumber}`);
  assert(puzzle.size > 0, `Invalid size in ${difficulty} #${puzzleNumber}`);
  assert(puzzle.grid.length === puzzle.size, `Grid row count mismatch in ${difficulty} #${puzzleNumber}`);
  assert(puzzle.words.length > 0, `No words found in ${difficulty} #${puzzleNumber}`);

  for (const row of puzzle.grid) {
    assert(row.length === puzzle.size, `Grid column count mismatch in ${difficulty} #${puzzleNumber}`);
  }

  for (const word of puzzle.words) {
    verifyWordCells(puzzle.grid, word, difficulty, puzzleNumber);
  }
}

for (const difficulty of DIFFICULTIES) {
  const count = getCatalogPuzzleCount(difficulty);

  assert(count === 10, `Expected 10 puzzles for ${difficulty}, received ${count}`);

  for (let puzzleNumber = 1; puzzleNumber <= count; puzzleNumber += 1) {
    verifyCatalogPuzzle(difficulty, puzzleNumber);
  }
}

console.log('Catalog verification passed for all 40 puzzles.');
