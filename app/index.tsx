import { useMemo, useState } from 'react';
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, KeyboardToolbar } from 'react-native-keyboard-controller';

import { DifficultyCard } from '../components/difficulty-card';
import { getWordCountForGridSize } from '../constants/directions';
import { useGameStore } from '../store/game-store';
import { type ThemeColors, useThemeColors } from '../theme/colors';
import { DEFAULT_GRID_SIZE, GRID_SIZE_OPTIONS } from '../types/game';
import type { Difficulty, GridSize } from '../types/game';
import { parsePuzzleShareCode } from '../utils/puzzle-code';

const DIFFICULTY_DETAILS: Record<Difficulty, { title: string; subtitle: string }> = {
  easy: {
    title: 'Easy',
    subtitle: 'Straight words to warm up and learn the flow.',
  },
  medium: {
    title: 'Medium',
    subtitle: 'Diagonals unlock with more hiding spots.',
  },
  hard: {
    title: 'Hard',
    subtitle: 'Backwards words, tougher overlaps, and sharper focus.',
  },
  expert: {
    title: 'Expert',
    subtitle: 'Full-direction hunts with the densest word set.',
  },
};

type ActiveSetting = 'grid' | 'difficulty' | null;

export default function HomeScreen() {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gridSize, setGridSize] = useState<GridSize>(DEFAULT_GRID_SIZE);
  const [shareCodeInput, setShareCodeInput] = useState('');
  const [activeSetting, setActiveSetting] = useState<ActiveSetting>(null);
  const wordCount = useMemo(() => getWordCountForGridSize(difficulty, gridSize), [difficulty, gridSize]);
  const activePuzzle = useGameStore((state) => state.puzzle);
  const activeStatus = useGameStore((state) => state.status);
  const activeDifficulty = useGameStore((state) => state.difficulty);
  const activeGridSize = useGameStore((state) => state.gridSize);
  const activeSeed = useGameStore((state) => state.seed);

  const hasActivePuzzle = activeStatus === 'playing' && Boolean(activePuzzle);

  const startGame = () => {
    router.push({
      pathname: '/game',
      params: {
        difficulty,
        seed: String(Date.now()),
        gridSize: String(gridSize),
      },
    });
  };

  const enterShareCode = () => {
    const parsed = parsePuzzleShareCode(shareCodeInput);

    if (!parsed) {
      Alert.alert('Invalid code', 'Paste a code like R-easy-10-1739991234567.');
      return;
    }

    router.push({
      pathname: '/game',
      params: {
        difficulty: parsed.difficulty,
        seed: String(parsed.value),
        gridSize: String(parsed.gridSize),
      },
    });
  };

  const returnToCurrentGame = () => {
    if (!hasActivePuzzle) {
      return;
    }

    router.push({
      pathname: '/game',
      params: {
        difficulty: activeDifficulty,
        seed: String(activeSeed),
        gridSize: String(activeGridSize),
      },
    });
  };

  const modalTitle =
    activeSetting === 'grid' ? 'Choose grid size' : activeSetting === 'difficulty' ? 'Choose difficulty' : '';

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollContent}>
        <View style={[styles.hero, { maxWidth: Math.min(width - 32, 760) }]}>
          <View style={styles.glowOne} />
          <View style={styles.glowTwo} />
          <Text selectable style={styles.kicker}>
            Seek. Spot. Solve.
          </Text>
          <Text selectable style={styles.title}>
            BockFind
          </Text>
          <Text selectable style={styles.subtitle}>
            A word-search game.
          </Text>

          <View style={styles.statsRow}>
            <SettingTile
              label="Grid"
              value={`${gridSize}×${gridSize}`}
              onPress={() => setActiveSetting('grid')}
            />
            <SettingTile
              label="Difficulty"
              value={difficulty.toUpperCase()}
              onPress={() => setActiveSetting('difficulty')}
            />
          </View>

          <Pressable accessibilityRole="button" onPress={startGame} style={styles.primaryButton}>
            <Text selectable style={styles.primaryButtonText}>
              Start puzzle
            </Text>
          </Pressable>

          {hasActivePuzzle ? (
            <Pressable
              accessibilityRole="button"
              onPress={returnToCurrentGame}
              style={styles.secondaryButton}
            >
              <Text selectable style={styles.secondaryButtonText}>
                Return to current game
              </Text>
            </Pressable>
          ) : null}
        </View>

        <View style={[styles.section, { maxWidth: Math.min(width - 32, 760) }]}>
          <Text selectable style={styles.sectionTitle}>
            Join code
          </Text>
          <View style={styles.codeCard}>
            <Text selectable style={styles.codeHint}>
              Paste a shared puzzle code from your friend.
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              placeholder="paste join code here"
              placeholderTextColor={colors.muted}
              style={styles.codeInput}
              value={shareCodeInput}
              onChangeText={setShareCodeInput}
              onSubmitEditing={enterShareCode}
              returnKeyType="go"
            />
            <Pressable accessibilityRole="button" onPress={enterShareCode} style={styles.joinButton}>
              <Text selectable style={styles.joinButtonText}>
                Play matching puzzle
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <KeyboardToolbar>
        <KeyboardToolbar.Done text="Done" />
      </KeyboardToolbar>

      <Modal
        transparent
        animationType="fade"
        visible={activeSetting !== null}
        onRequestClose={() => setActiveSetting(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { maxWidth: Math.min(width - 32, 760) }]}>
            <View style={styles.modalHeader}>
              <Text selectable style={styles.modalTitle}>
                {modalTitle}
              </Text>
              <Pressable
                accessibilityRole="button"
                onPress={() => setActiveSetting(null)}
                style={styles.modalCloseButton}
              >
                <Text selectable style={styles.modalCloseText}>
                  Done
                </Text>
              </Pressable>
            </View>

            {activeSetting === 'grid' ? (
              <View style={styles.pickerWrap}>
                {GRID_SIZE_OPTIONS.map((option) => (
                  <Pressable
                    key={option}
                    accessibilityRole="button"
                    onPress={() => setGridSize(option)}
                    style={[styles.pickerChip, option === gridSize && styles.pickerChipSelected]}
                  >
                    <Text
                      selectable
                      style={[styles.pickerChipText, option === gridSize && styles.pickerChipTextSelected]}
                    >
                      {option}×{option}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ) : null}

            {activeSetting === 'difficulty' ? (
              <View style={styles.difficultyList}>
                {(Object.keys(DIFFICULTY_DETAILS) as Difficulty[]).map((option) => (
                  <DifficultyCard
                    key={option}
                    difficulty={option}
                    title={DIFFICULTY_DETAILS[option].title}
                    subtitle={DIFFICULTY_DETAILS[option].subtitle}
                    selected={difficulty === option}
                    onPress={() => setDifficulty(option)}
                  />
                ))}
              </View>
            ) : null}
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

function SettingTile({ label, value, onPress }: { label: string; value: string; onPress?: () => void }) {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      onPress={onPress}
      disabled={!onPress}
      style={styles.statCard}
    >
      <Text selectable style={styles.statLabel}>
        {label}
      </Text>
      <Text selectable style={styles.statValue}>
        {value}
      </Text>
      {onPress ? (
        <Text selectable style={styles.statHint}>
          Tap to edit
        </Text>
      ) : null}
    </Pressable>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 36,
      gap: 20,
      alignItems: 'center',
    },
    hero: {
      width: '100%',
      borderRadius: 36,
      overflow: 'hidden',
      backgroundColor: colors.panel,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 22,
      gap: 18,
      boxShadow: `0 30px 80px ${colors.shadow}`,
    },
    glowOne: {
      position: 'absolute',
      right: -40,
      top: -40,
      width: 160,
      height: 160,
      borderRadius: 999,
      backgroundColor: colors.glowAccent,
    },
    glowTwo: {
      position: 'absolute',
      left: -48,
      bottom: -56,
      width: 180,
      height: 180,
      borderRadius: 999,
      backgroundColor: colors.glowSuccess,
    },
    kicker: {
      color: colors.accent,
      fontSize: 12,
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: 1.8,
    },
    title: {
      color: colors.text,
      fontSize: 54,
      fontWeight: '900',
      letterSpacing: -1.4,
      lineHeight: 56,
    },
    subtitle: {
      color: colors.muted,
      fontSize: 15,
      lineHeight: 22,
      maxWidth: 580,
    },
    statsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    statCard: {
      minWidth: 96,
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
      fontSize: 20,
      fontWeight: '900',
    },
    statHint: {
      color: colors.accent,
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 0.4,
    },
    settingsHint: {
      color: colors.muted,
      fontSize: 13,
      lineHeight: 19,
    },
    primaryButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: colors.accentStrong,
      paddingVertical: 16,
    },
    primaryButtonText: {
      color: colors.onAccent,
      fontSize: 16,
      fontWeight: '900',
      letterSpacing: 0.7,
    },
    secondaryButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.accent,
      backgroundColor: colors.accentTint,
      paddingVertical: 14,
    },
    secondaryButtonText: {
      color: colors.accent,
      fontSize: 15,
      fontWeight: '900',
      letterSpacing: 0.4,
    },
    section: {
      width: '100%',
      gap: 12,
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 22,
      fontWeight: '900',
      letterSpacing: -0.4,
    },
    difficultyList: {
      gap: 12,
    },
    codeCard: {
      borderRadius: 24,
      backgroundColor: colors.panel,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
      gap: 12,
    },
    codeHint: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 20,
    },
    codeInput: {
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surfaceSubtle,
      color: colors.text,
      fontSize: 15,
      paddingHorizontal: 14,
      paddingVertical: 12,
    },
    joinButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor: colors.accentStrong,
      paddingVertical: 13,
    },
    joinButtonText: {
      color: colors.onAccent,
      fontSize: 15,
      fontWeight: '900',
      letterSpacing: 0.5,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: colors.overlay,
    },
    modalCard: {
      width: '100%',
      alignSelf: 'center',
      borderRadius: 28,
      backgroundColor: colors.panel,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 18,
      gap: 16,
      boxShadow: `0 30px 80px ${colors.shadow}`,
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
    },
    modalTitle: {
      color: colors.text,
      fontSize: 24,
      fontWeight: '900',
      letterSpacing: -0.4,
    },
    modalCloseButton: {
      borderRadius: 14,
      backgroundColor: colors.surfaceSubtle,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    modalCloseText: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '800',
    },
    pickerWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    pickerChip: {
      minWidth: 72,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surfaceSoft,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    pickerChipSelected: {
      borderColor: colors.accent,
      backgroundColor: colors.accentTintStrong,
    },
    pickerChipText: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '800',
    },
    pickerChipTextSelected: {
      color: colors.accent,
    },
    helpCard: {
      borderRadius: 28,
      backgroundColor: colors.panel,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 18,
      flexDirection: 'row',
      gap: 12,
    },
    helpText: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 22,
    },
  });
}
