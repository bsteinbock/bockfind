import type { Difficulty, GameMode } from '../types/game';

export interface ParsedPuzzleCode {
  difficulty: Difficulty;
  mode: GameMode;
  value: number;
}

const SHARE_CODE_PATTERN = /\b([RC])-(easy|medium|hard|expert)-(\d{1,13})\b/i;

export function formatPuzzleShareCode(
  difficulty: Difficulty,
  mode: GameMode,
  seed: number,
  puzzleNumber: number,
): string {
  if (mode === 'catalog') {
    return `C-${difficulty}-${String(puzzleNumber).padStart(2, '0')}`;
  }

  return `R-${difficulty}-${seed}`;
}

export function parsePuzzleShareCode(input: string): ParsedPuzzleCode | null {
  const match = input.match(SHARE_CODE_PATTERN);

  if (!match) {
    return null;
  }

  const mode = match[1].toUpperCase() === 'C' ? 'catalog' : 'random';
  const difficulty = match[2].toLowerCase() as Difficulty;
  const value = Number(match[3]);

  if (!Number.isFinite(value) || value <= 0) {
    return null;
  }

  return {
    difficulty,
    mode,
    value: Math.floor(value),
  };
}
