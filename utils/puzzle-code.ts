import { DEFAULT_GRID_SIZE, GRID_SIZE_OPTIONS } from '../types/game';
import type { Difficulty, GridSize } from '../types/game';

export interface ParsedPuzzleCode {
  difficulty: Difficulty;
  value: number;
  gridSize: GridSize;
}

const RANDOM_SHARE_CODE_PATTERN = /\bR-(easy|medium|hard|expert)-(10|12|14|16|18|20|22)-(\d{1,13})\b/i;
const LEGACY_RANDOM_SHARE_CODE_PATTERN = /\bR-(easy|medium|hard|expert)-(\d{1,13})\b/i;
const LEGACY_RANDOM_WITH_WORD_COUNT_PATTERN =
  /\bR-(easy|medium|hard|expert)-(10|12|14|16|18|20|22)-(\d{1,2})-(\d{1,13})\b/i;

export function formatPuzzleShareCode(difficulty: Difficulty, seed: number, gridSize: GridSize): string {
  return `R-${difficulty}-${gridSize}-${seed}`;
}

export function parsePuzzleShareCode(input: string): ParsedPuzzleCode | null {
  const randomMatch = input.match(RANDOM_SHARE_CODE_PATTERN);

  if (randomMatch) {
    const difficulty = randomMatch[1].toLowerCase() as Difficulty;
    const gridSize = Number(randomMatch[2]) as GridSize;
    const value = Number(randomMatch[3]);

    if (!GRID_SIZE_OPTIONS.includes(gridSize) || !Number.isFinite(value) || value <= 0) {
      return null;
    }

    return {
      difficulty,
      value: Math.floor(value),
      gridSize,
    };
  }

  const legacyWithWordCountMatch = input.match(LEGACY_RANDOM_WITH_WORD_COUNT_PATTERN);

  if (legacyWithWordCountMatch) {
    const difficulty = legacyWithWordCountMatch[1].toLowerCase() as Difficulty;
    const gridSize = Number(legacyWithWordCountMatch[2]) as GridSize;
    const value = Number(legacyWithWordCountMatch[4]);

    if (!GRID_SIZE_OPTIONS.includes(gridSize) || !Number.isFinite(value) || value <= 0) {
      return null;
    }

    return {
      difficulty,
      value: Math.floor(value),
      gridSize,
    };
  }

  const legacyRandomMatch = input.match(LEGACY_RANDOM_SHARE_CODE_PATTERN);

  if (legacyRandomMatch) {
    const difficulty = legacyRandomMatch[1].toLowerCase() as Difficulty;
    const value = Number(legacyRandomMatch[2]);

    if (!Number.isFinite(value) || value <= 0) {
      return null;
    }

    return {
      difficulty,
      value: Math.floor(value),
      gridSize: DEFAULT_GRID_SIZE,
    };
  }

  return null;
}
