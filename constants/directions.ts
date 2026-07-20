import type { Difficulty } from '../types/game';

export interface Direction {
  id: string;
  row: number;
  col: number;
}

export const DIRECTIONS = {
  right: { id: 'right', row: 0, col: 1 },
  left: { id: 'left', row: 0, col: -1 },
  down: { id: 'down', row: 1, col: 0 },
  up: { id: 'up', row: -1, col: 0 },
  downRight: { id: 'down-right', row: 1, col: 1 },
  downLeft: { id: 'down-left', row: 1, col: -1 },
  upRight: { id: 'up-right', row: -1, col: 1 },
  upLeft: { id: 'up-left', row: -1, col: -1 },
} as const;

export const DIFFICULTY_CONFIG = {
  easy: {
    size: 10,
    wordCount: 10,
    minWordLength: 3,
    maxWordLength: 7,
    directions: [DIRECTIONS.right, DIRECTIONS.down],
  },
  medium: {
    size: 14,
    wordCount: 12,
    minWordLength: 4,
    maxWordLength: 8,
    directions: [DIRECTIONS.right, DIRECTIONS.down, DIRECTIONS.downRight, DIRECTIONS.upRight],
  },
  hard: {
    size: 18,
    wordCount: 15,
    minWordLength: 4,
    maxWordLength: 10,
    directions: [
      DIRECTIONS.right,
      DIRECTIONS.left,
      DIRECTIONS.down,
      DIRECTIONS.up,
      DIRECTIONS.downRight,
      DIRECTIONS.downLeft,
      DIRECTIONS.upRight,
      DIRECTIONS.upLeft,
    ],
  },
  expert: {
    size: 22,
    wordCount: 18,
    minWordLength: 5,
    maxWordLength: 12,
    directions: [
      DIRECTIONS.right,
      DIRECTIONS.left,
      DIRECTIONS.down,
      DIRECTIONS.up,
      DIRECTIONS.downRight,
      DIRECTIONS.downLeft,
      DIRECTIONS.upRight,
      DIRECTIONS.upLeft,
    ],
  },
} satisfies Record<
  Difficulty,
  {
    size: number;
    wordCount: number;
    minWordLength: number;
    maxWordLength: number;
    directions: readonly Direction[];
  }
>;

export function getWordCountForGridSize(difficulty: Difficulty, gridSize: number): number {
  void difficulty;

  return gridSize;
}
