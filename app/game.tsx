import { useEffect, useMemo, useRef } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { GameBoard } from '../components/game-board';
import { VictoryModal } from '../components/victory-modal';
import { WordList } from '../components/word-list';
import { useGameStore } from '../store/game-store';
import { colors } from '../theme/colors';
import { CATALOG_PUZZLES_PER_DIFFICULTY } from '../types/game';
import type { Difficulty, GameMode } from '../types/game';

function normalizeDifficulty(value: string | string[] | undefined): Difficulty {
  const resolved = Array.isArray(value) ? value[0] : value;

  if (resolved === 'medium' || resolved === 'hard' || resolved === 'expert') {
    return resolved;
  }

  return 'easy';
}

function resolveSeed(value: string | string[] | undefined): number {
  const resolved = Array.isArray(value) ? value[0] : value;
  const parsed = resolved ? Number(resolved) : Number.NaN;

  return Number.isFinite(parsed) ? parsed : Date.now();
}

function normalizeMode(value: string | string[] | undefined): GameMode {
  const resolved = Array.isArray(value) ? value[0] : value;

  if (resolved === 'catalog') {
    return 'catalog';
  }

  return 'random';
}

function resolvePuzzleNumber(value: string | string[] | undefined): number {
  const resolved = Array.isArray(value) ? value[0] : value;
  const parsed = resolved ? Number(resolved) : Number.NaN;

  if (!Number.isFinite(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(CATALOG_PUZZLES_PER_DIFFICULTY, Math.floor(parsed)));
}

function formatCatalogPuzzleId(difficulty: Difficulty, puzzleNumber: number): string {
  const prefix = difficulty[0].toUpperCase();
  const paddedNumber = String(puzzleNumber).padStart(2, '0');

  return `${prefix}-${paddedNumber}`;
}

export default function GameScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    difficulty?: string;
    mode?: string;
    seed?: string;
    puzzleNumber?: string;
  }>();
  const { width, height } = useWindowDimensions();
  const difficulty = normalizeDifficulty(params.difficulty);
  const mode = normalizeMode(params.mode);
  const seed = resolveSeed(params.seed);
  const puzzleNumber = resolvePuzzleNumber(params.puzzleNumber);

  const puzzle = useGameStore((state) => state.puzzle);
  const status = useGameStore((state) => state.status);
  const selection = useGameStore((state) => state.selection);
  const foundWords = useGameStore((state) => state.foundWords);
  const score = useGameStore((state) => state.score);
  const elapsedSeconds = useGameStore((state) => state.elapsedSeconds);
  const startGame = useGameStore((state) => state.startGame);
  const setSelection = useGameStore((state) => state.setSelection);
  const finalizeSelection = useGameStore((state) => state.finalizeSelection);
  const tick = useGameStore((state) => state.tick);

  const lastRunKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const runKey =
      mode === 'catalog' ? `${mode}:${difficulty}:${puzzleNumber}` : `${mode}:${difficulty}:${seed}`;

    if (lastRunKeyRef.current === runKey && puzzle?.difficulty === difficulty) {
      return;
    }

    lastRunKeyRef.current = runKey;
    startGame({
      difficulty,
      mode,
      seed,
      puzzleNumber,
    });
  }, [difficulty, mode, puzzle?.difficulty, puzzleNumber, seed, startGame]);

  useEffect(() => {
    if (status !== 'playing') {
      return undefined;
    }

    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [status, tick]);

  const cellSize = useMemo(() => {
    if (!puzzle) {
      return 24;
    }

    const availableWidth = width - 32;
    const availableHeight = height * 0.56;
    const rawSize = Math.floor(Math.min(availableWidth, availableHeight) / puzzle.size);

    return Math.max(14, Math.min(36, rawSize));
  }, [height, puzzle, width]);

  const resetPuzzle = () => {
    startGame({
      difficulty,
      mode,
      seed: mode === 'catalog' ? seed : Date.now(),
      puzzleNumber,
    });
  };

  const handleSelectionStart = () => {
    Haptics.selectionAsync().catch(() => undefined);
  };

  const handleSelectionEnd = () => {
    const result = finalizeSelection();

    if (!result) {
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => undefined);
  };

  if (!puzzle) {
    return null;
  }

  const wordsRemaining = puzzle.words.length - foundWords.length;

  return (
    <View style={styles.screen}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerCard}>
          <View style={styles.headerTopRow}>
            <View style={styles.badgeGroup}>
              <View style={styles.badge}>
                <Text selectable style={styles.badgeText}>
                  {difficulty.toUpperCase()}
                </Text>
              </View>
              {mode === 'catalog' ? (
                <View style={styles.badgeSecondary}>
                  <Text selectable style={styles.badgeSecondaryText}>
                    {formatCatalogPuzzleId(difficulty, puzzleNumber)}
                  </Text>
                </View>
              ) : null}
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={() => router.back()}
              style={styles.secondaryButton}
            >
              <Text selectable style={styles.secondaryButtonText}>
                Home
              </Text>
            </Pressable>
          </View>

          <Text selectable style={styles.headerTitle}>
            Drag to trace the hidden words.
          </Text>

          <View style={styles.statsRow}>
            <Stat label="Score" value={String(score)} />
            <Stat label="Time" value={`${elapsedSeconds}s`} />
            <Stat label="Remaining" value={String(wordsRemaining)} />
          </View>
        </View>

        <View style={styles.boardWrap}>
          <GameBoard
            puzzle={puzzle}
            cellSize={cellSize}
            selection={selection}
            foundWords={foundWords}
            onSelectionChange={setSelection}
            onSelectionStart={handleSelectionStart}
            onSelectionEnd={handleSelectionEnd}
          />
        </View>

        <View style={styles.section}>
          <Text selectable style={styles.sectionTitle}>
            Word list
          </Text>
          <WordList words={puzzle.words.map((word) => word.text)} foundWords={foundWords} />
        </View>

        <View style={styles.section}>
          <Text selectable style={styles.sectionTitle}>
            Tips
          </Text>
          <View style={styles.tipCard}>
            <Text selectable style={styles.tipText}>
              The selection snaps to allowed directions only, so a small drift still resolves to a clean line.
            </Text>
            <Text selectable style={styles.tipText}>
              Backwards words unlock on harder settings. Bigger boards mean more overlaps and tighter spacing.
            </Text>
          </View>
        </View>
      </ScrollView>

      <VictoryModal
        visible={status === 'won'}
        score={score}
        elapsedSeconds={elapsedSeconds}
        wordsFound={foundWords.length}
        totalWords={puzzle.words.length}
        onPlayAgain={resetPuzzle}
      />
    </View>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statCard}>
      <Text selectable style={styles.statLabel}>
        {label}
      </Text>
      <Text selectable style={styles.statValue}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  headerCard: {
    width: '100%',
    maxWidth: 760,
    borderRadius: 32,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    gap: 16,
    boxShadow: `0 24px 70px ${colors.shadow}`,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  badgeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    borderRadius: 999,
    backgroundColor: 'rgba(125,211,252,0.16)',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  badgeSecondary: {
    borderRadius: 999,
    backgroundColor: 'rgba(52, 211, 153, 0.16)',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  badgeText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  badgeSecondaryText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  secondaryButton: {
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  secondaryButtonText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  headerTitle: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    minWidth: 92,
    flexGrow: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    gap: 4,
  },
  statLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  statValue: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '900',
  },
  boardWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    width: '100%',
    maxWidth: 760,
    gap: 12,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.3,
  },
  tipCard: {
    borderRadius: 24,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    gap: 12,
  },
  tipText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
  },
});
