import { create } from 'zustand';

import { getCatalogPuzzle } from '../constants/puzzle-catalog';
import { generatePuzzle } from '../engine/puzzle-generator';
import { scoreForWord } from '../engine/scoring';
import { validateSelection } from '../engine/validation';
import { CATALOG_PUZZLES_PER_DIFFICULTY } from '../types/game';
import type { Difficulty, GameMode, GameStatus, Position, Puzzle } from '../types/game';

interface StartGameParams {
  difficulty: Difficulty;
  mode?: GameMode;
  seed?: number;
  puzzleNumber?: number;
}

interface GameState {
  difficulty: Difficulty;
  mode: GameMode;
  puzzleNumber: number | null;
  seed: number;
  puzzle: Puzzle | null;
  status: GameStatus;
  selection: Position[];
  foundWords: string[];
  score: number;
  elapsedSeconds: number;
  lastFoundWord: string | null;
  startGame: (params: StartGameParams) => void;
  setSelection: (selection: Position[]) => void;
  clearSelection: () => void;
  finalizeSelection: () => string | null;
  tick: () => void;
}

function sortSelectedWords(words: string[]): string[] {
  return [...words].sort((left, right) => left.localeCompare(right));
}

export const useGameStore = create<GameState>((set, get) => ({
  difficulty: 'easy',
  mode: 'random',
  puzzleNumber: null,
  seed: Date.now(),
  puzzle: null,
  status: 'idle',
  selection: [],
  foundWords: [],
  score: 0,
  elapsedSeconds: 0,
  lastFoundWord: null,
  startGame({ difficulty, mode = 'random', seed = Date.now(), puzzleNumber = 1 }) {
    const normalizedPuzzleNumber = Math.max(
      1,
      Math.min(CATALOG_PUZZLES_PER_DIFFICULTY, Math.floor(puzzleNumber)),
    );
    const puzzle =
      mode === 'catalog'
        ? getCatalogPuzzle(difficulty, normalizedPuzzleNumber)
        : generatePuzzle(difficulty, seed);

    set({
      difficulty,
      mode,
      puzzleNumber: mode === 'catalog' ? normalizedPuzzleNumber : null,
      seed: puzzle.seed,
      puzzle,
      status: 'playing',
      selection: [],
      foundWords: [],
      score: 0,
      elapsedSeconds: 0,
      lastFoundWord: null,
    });
  },
  setSelection(selection) {
    set({ selection });
  },
  clearSelection() {
    set({ selection: [] });
  },
  finalizeSelection() {
    const { puzzle, selection, elapsedSeconds, foundWords } = get();

    if (!puzzle || selection.length < 2) {
      set({ selection: [] });
      return null;
    }

    const result = validateSelection(puzzle, selection, foundWords);

    if (!result.foundWord) {
      set({ selection: [] });
      return null;
    }

    if (foundWords.includes(result.foundWord)) {
      set({ selection: [] });
      return null;
    }

    const foundWord = result.foundWord;
    const nextFoundWords = sortSelectedWords([...foundWords, foundWord]);

    set((current) => ({
      foundWords: nextFoundWords,
      score: current.score + scoreForWord(foundWord, elapsedSeconds, current.foundWords.length),
      selection: [],
      lastFoundWord: foundWord,
      status: puzzle.words.length === nextFoundWords.length ? 'won' : current.status,
    }));

    return foundWord;
  },
  tick() {
    const { status } = get();

    if (status !== 'playing') {
      return;
    }

    set((current) => ({ elapsedSeconds: current.elapsedSeconds + 1 }));
  },
}));
