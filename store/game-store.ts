import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { generatePuzzle } from '../engine/puzzle-generator';
import { scoreForWord } from '../engine/scoring';
import { validateSelection } from '../engine/validation';
import { DEFAULT_GRID_SIZE } from '../types/game';
import type { Difficulty, GameStatus, GridSize, Position, Puzzle } from '../types/game';

interface StartGameParams {
  difficulty: Difficulty;
  seed?: number;
  gridSize?: GridSize;
}

interface GameState {
  preferredDifficulty: Difficulty;
  preferredGridSize: GridSize;
  difficulty: Difficulty;
  gridSize: GridSize;
  seed: number;
  puzzle: Puzzle | null;
  status: GameStatus;
  selection: Position[];
  foundWords: string[];
  score: number;
  elapsedSeconds: number;
  lastFoundWord: string | null;
  setPreferredDifficulty: (difficulty: Difficulty) => void;
  setPreferredGridSize: (gridSize: GridSize) => void;
  startGame: (params: StartGameParams) => void;
  setSelection: (selection: Position[]) => void;
  clearSelection: () => void;
  finalizeSelection: () => string | null;
  tick: () => void;
}

function sortSelectedWords(words: string[]): string[] {
  return [...words].sort((left, right) => left.localeCompare(right));
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      preferredDifficulty: 'easy',
      preferredGridSize: DEFAULT_GRID_SIZE,
      difficulty: 'easy',
      gridSize: DEFAULT_GRID_SIZE,
      seed: Date.now(),
      puzzle: null,
      status: 'idle',
      selection: [],
      foundWords: [],
      score: 0,
      elapsedSeconds: 0,
      lastFoundWord: null,
      setPreferredDifficulty(preferredDifficulty) {
        set({ preferredDifficulty });
      },
      setPreferredGridSize(preferredGridSize) {
        set({ preferredGridSize });
      },
      startGame({ difficulty, seed = Date.now(), gridSize = DEFAULT_GRID_SIZE }) {
        const puzzle = generatePuzzle(difficulty, seed, gridSize);

        set({
          preferredDifficulty: difficulty,
          preferredGridSize: gridSize,
          difficulty,
          gridSize,
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
    }),
    {
      name: 'bockfind-preferences',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        preferredDifficulty: state.preferredDifficulty,
        preferredGridSize: state.preferredGridSize,
      }),
    },
  ),
);
