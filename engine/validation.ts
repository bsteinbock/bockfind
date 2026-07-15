import type { Puzzle, Position } from '../types/game';

export interface ValidationResult {
  foundWord: string | null;
  discoveredCells: Position[];
}

export function readSelectionLetters(puzzle: Puzzle, selection: Position[]): string {
  return selection.map(({ row, col }) => puzzle.grid[row]?.[col] ?? '').join('');
}

export function validateSelection(
  puzzle: Puzzle,
  selection: Position[],
  foundWords: readonly string[],
): ValidationResult {
  if (selection.length < 2) {
    return { foundWord: null, discoveredCells: [] };
  }

  const selected = readSelectionLetters(puzzle, selection);
  const reversed = [...selection]
    .reverse()
    .map(({ row, col }) => puzzle.grid[row]?.[col] ?? '')
    .join('');

  const match = puzzle.words.find(
    (word) => !foundWords.includes(word.text) && (word.text === selected || word.text === reversed),
  );

  if (!match) {
    return { foundWord: null, discoveredCells: [] };
  }

  return {
    foundWord: match.text,
    discoveredCells: match.cells,
  };
}