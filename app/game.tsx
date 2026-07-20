import { useEffect, useMemo, useRef } from 'react';
import { Pressable, ScrollView, Share, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { GameBoard } from '../components/game-board';
import { VictoryModal } from '../components/victory-modal';
import { WordList } from '../components/word-list';
import { useGameStore } from '../store/game-store';
import { type ThemeColors, useThemeColors } from '../theme/colors';
import { DEFAULT_GRID_SIZE, GRID_SIZE_OPTIONS } from '../types/game';
import { formatPuzzleShareCode } from '../utils/puzzle-code';
import type { Difficulty, GridSize } from '../types/game';

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

function resolveGridSize(value: string | string[] | undefined): GridSize {
  const resolved = Array.isArray(value) ? value[0] : value;
  const parsed = resolved ? Number(resolved) : Number.NaN;

  if (!GRID_SIZE_OPTIONS.includes(parsed as GridSize)) {
    return DEFAULT_GRID_SIZE;
  }

  return parsed as GridSize;
}

export default function GameScreen() {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const router = useRouter();
  const params = useLocalSearchParams<{
    difficulty?: string;
    seed?: string;
    gridSize?: string;
  }>();
  const { width, height } = useWindowDimensions();
  const difficulty = normalizeDifficulty(params.difficulty);
  const seed = resolveSeed(params.seed);
  const gridSize = resolveGridSize(params.gridSize);

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
    const runKey = `${difficulty}:${gridSize}:${seed}`;

    if (lastRunKeyRef.current === runKey && puzzle?.difficulty === difficulty) {
      return;
    }

    lastRunKeyRef.current = runKey;
    startGame({
      difficulty,
      seed,
      gridSize,
    });
  }, [difficulty, gridSize, puzzle?.difficulty, seed, startGame]);

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
      seed: Date.now(),
      gridSize,
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

  const handleSharePuzzle = async () => {
    try {
      await Share.share({
        message: `BockFind puzzle code: ${shareCode}`,
        title: 'Share BockFind puzzle',
      });
    } catch {
      // Ignore share sheet cancellations and platform errors.
    }
  };

  if (!puzzle) {
    return null;
  }

  const shareCode = formatPuzzleShareCode(difficulty, seed, (puzzle.size as GridSize) || DEFAULT_GRID_SIZE);

  return (
    <View style={styles.screen}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollContent}>
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
      </ScrollView>

      <View style={styles.bottomBar}>
        <Pressable style={styles.shareButton} onPress={handleSharePuzzle}>
          <Text selectable style={styles.shareButtonTitle}>
            Share Join Code
          </Text>
        </Pressable>
      </View>

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
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

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

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      alignItems: 'center',
      gap: 20,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 116,
    },
    bottomBar: {
      paddingHorizontal: 16,
      paddingBottom: 18,
      paddingTop: 10,
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    shareButton: {
      borderRadius: 18,
      backgroundColor: colors.accent,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      paddingHorizontal: 18,
      gap: 2,
    },
    shareButtonTitle: {
      color: colors.onAccent,
      fontSize: 16,
      fontWeight: '900',
      letterSpacing: 0.3,
    },
    shareButtonCode: {
      color: colors.onAccent,
      fontSize: 12,
      fontWeight: '700',
      opacity: 0.9,
      letterSpacing: 0.8,
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
      backgroundColor: colors.accentTintStrong,
      paddingHorizontal: 12,
      paddingVertical: 7,
    },
    badgeSecondary: {
      borderRadius: 999,
      backgroundColor: colors.successTint,
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
      backgroundColor: colors.surfaceSubtle,
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    secondaryButtonText: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '800',
    },
    shareCard: {
      borderRadius: 20,
      backgroundColor: colors.surfaceSubtle,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 14,
      paddingVertical: 12,
      gap: 4,
    },
    shareLabel: {
      color: colors.muted,
      fontSize: 11,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 1.2,
    },
    shareCode: {
      color: colors.text,
      fontSize: 18,
      fontWeight: '900',
      letterSpacing: 0.8,
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
      backgroundColor: colors.surfaceSubtle,
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
}
