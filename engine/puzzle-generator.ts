import { DIFFICULTY_CONFIG } from '../constants/directions';
import { WORD_BANK } from '../constants/words';
import type { Difficulty, Position, Puzzle, PuzzleWord } from '../types/game';
import { createSeededRandom } from '../utils/random';

function createEmptyGrid(size: number): Array<Array<string | null>> {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => null));
}

function isPlacementValid(
  grid: Array<Array<string | null>>,
  word: string,
  start: Position,
  directionRow: number,
  directionCol: number,
): boolean {
  const size = grid.length;

  for (let index = 0; index < word.length; index += 1) {
    const row = start.row + directionRow * index;
    const col = start.col + directionCol * index;

    if (row < 0 || col < 0 || row >= size || col >= size) {
      return false;
    }

    const current = grid[row][col];
    const letter = word[index];

    if (current !== null && current !== letter) {
      return false;
    }
  }

  return true;
}

function placeWord(
  grid: Array<Array<string | null>>,
  word: string,
  directions: readonly { row: number; col: number }[],
  random: ReturnType<typeof createSeededRandom>,
): PuzzleWord | null {
  const size = grid.length;

  for (let attempt = 0; attempt < 500; attempt += 1) {
    const direction = random.pick(directions);

    const minRow = direction.row === -1 ? word.length - 1 : 0;
    const maxRow = direction.row === 1 ? size - word.length : size - 1;
    const minCol = direction.col === -1 ? word.length - 1 : 0;
    const maxCol = direction.col === 1 ? size - word.length : size - 1;

    if (minRow > maxRow || minCol > maxCol) {
      continue;
    }

    const start = {
      row: minRow + random.int(maxRow - minRow + 1),
      col: minCol + random.int(maxCol - minCol + 1),
    };

    if (!isPlacementValid(grid, word, start, direction.row, direction.col)) {
      continue;
    }

    const cells: Position[] = [];

    for (let index = 0; index < word.length; index += 1) {
      const row = start.row + direction.row * index;
      const col = start.col + direction.col * index;
      grid[row][col] = word[index];
      cells.push({ row, col });
    }

    return {
      text: word,
      start,
      end: cells[cells.length - 1],
      cells,
      found: false,
    };
  }

  return null;
}

function fillGrid(grid: Array<Array<string | null>>, random: ReturnType<typeof createSeededRandom>): string[][] {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return grid.map((row) => row.map((cell) => cell ?? letters[random.int(letters.length)]));
}

function pickWords(difficulty: Difficulty, random: ReturnType<typeof createSeededRandom>): string[] {
  const config = DIFFICULTY_CONFIG[difficulty];
  const candidates = WORD_BANK.filter(
    (word) => word.length >= config.minWordLength && word.length <= config.maxWordLength,
  );
  const shuffled = random.shuffle(candidates);

  return shuffled.slice(0, Math.min(config.wordCount, shuffled.length)).map((word) => word.toUpperCase());
}

export function generatePuzzle(difficulty: Difficulty, seed: number): Puzzle {
  const config = DIFFICULTY_CONFIG[difficulty];
  const random = createSeededRandom(seed);

  for (let generationAttempt = 0; generationAttempt < 40; generationAttempt += 1) {
    const grid = createEmptyGrid(config.size);
    const wordsToPlace = random
      .shuffle(pickWords(difficulty, random))
      .sort((left, right) => right.length - left.length);
    const placements: PuzzleWord[] = [];
    let failed = false;

    for (const word of wordsToPlace) {
      const placement = placeWord(grid, word, config.directions, random);

      if (!placement) {
        failed = true;
        break;
      }

      placements.push(placement);
    }

    if (failed) {
      continue;
    }

    const filledGrid = fillGrid(grid, random);

    return {
      seed,
      difficulty,
      size: config.size,
      grid: filledGrid,
      words: placements.sort((left, right) => left.text.localeCompare(right.text)),
    };
  }

  throw new Error(`Failed to generate a puzzle for ${difficulty}`);
}

export function getDifficultyWords(difficulty: Difficulty): string[] {
  const config = DIFFICULTY_CONFIG[difficulty];

  return WORD_BANK.filter(
    (word) => word.length >= config.minWordLength && word.length <= config.maxWordLength,
  ).slice(0, config.wordCount);
}