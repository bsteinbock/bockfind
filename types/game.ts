export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
export const GRID_SIZE_OPTIONS = [10, 12, 14, 16, 18, 20, 22] as const;
export type GridSize = (typeof GRID_SIZE_OPTIONS)[number];
export const DEFAULT_GRID_SIZE: GridSize = 10;

export type GameStatus = 'idle' | 'playing' | 'won';

export interface Position {
  row: number;
  col: number;
}

export interface PuzzleWord {
  text: string;
  start: Position;
  end: Position;
  cells: Position[];
  found: boolean;
}

export interface Puzzle {
  seed: number;
  difficulty: Difficulty;
  size: number;
  grid: string[][];
  words: PuzzleWord[];
}

export interface SelectionState {
  anchor: Position | null;
  cells: Position[];
}
