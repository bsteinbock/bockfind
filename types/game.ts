export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

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