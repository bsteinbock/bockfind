import { useMemo, useState } from 'react';
import {
  Alert,
  Platform,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  useColorScheme,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';
import { ReactNativeLegal } from 'react-native-legal';

import { DifficultyCard } from '../components/difficulty-card';
import { getWordCountForGridSize } from '../constants/directions';
import { useGameStore } from '../store/game-store';
import { type ThemeColors, useThemeColors } from '../theme/colors';
import { GRID_SIZE_OPTIONS } from '../types/game';
import type { Difficulty } from '../types/game';
import { parsePuzzleShareCode, extractPuzzleCode } from '../utils/puzzle-code';

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
    subtitle: 'Backwards words, tougher overlaps.',
  },
  expert: {
    title: 'Expert',
    subtitle: 'Full-direction hunts.',
  },
};

type ActiveSetting = 'grid' | 'difficulty' | null;
const KEYBOARD_TOOLBAR_HEIGHT = 88;

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const router = useRouter();
  const { width } = useWindowDimensions();
  const preferredDifficulty = useGameStore((state) => state.preferredDifficulty);
  const preferredGridSize = useGameStore((state) => state.preferredGridSize);
  const setPreferredDifficulty = useGameStore((state) => state.setPreferredDifficulty);
  const setPreferredGridSize = useGameStore((state) => state.setPreferredGridSize);
  const [shareCodeInput, setShareCodeInput] = useState('');
  const [activeSetting, setActiveSetting] = useState<ActiveSetting>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const activePuzzle = useGameStore((state) => state.puzzle);
  const activeStatus = useGameStore((state) => state.status);
  const activeDifficulty = useGameStore((state) => state.difficulty);
  const activeGridSize = useGameStore((state) => state.gridSize);
  const activeSeed = useGameStore((state) => state.seed);

  const hasActivePuzzle = activeStatus === 'playing' && Boolean(activePuzzle);
  const appVersion = Constants.expoConfig?.version ?? 'Unknown';

  const startGame = () => {
    router.push({
      pathname: '/game',
      params: {
        difficulty: preferredDifficulty,
        seed: String(Date.now()),
        gridSize: String(preferredGridSize),
      },
    });
  };

  const enterShareCode = () => {
    const parsed = parsePuzzleShareCode(shareCodeInput);

    if (!parsed) {
      Alert.alert('Invalid code', 'Paste a code like R-easy-10-1739991234567.');
      return;
    }

    setShareCodeInput('');

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

  const showLicenses = () => {
    try {
      ReactNativeLegal.launchLicenseListScreen('Open Source Licenses');
    } catch {
      Alert.alert('Unavailable', 'Open source licenses are not available in this runtime.');
    }
  };

  const modalTitle =
    activeSetting === 'grid' ? 'Choose grid size' : activeSetting === 'difficulty' ? 'Choose difficulty' : '';

  return (
    <>
      <KeyboardAwareScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollContent}
        bottomOffset={KEYBOARD_TOOLBAR_HEIGHT}
        extraKeyboardSpace={KEYBOARD_TOOLBAR_HEIGHT}
      >
        <View
          style={[
            styles.hero,
            { maxWidth: Math.min(width - 32, 760) },
            Platform.OS === 'android' && { marginTop: 26 },
          ]}
        >
          <View style={styles.headerRow}>
            <View style={styles.titleRow}>
              <Text style={[styles.title, { color: colors.text }]}>BockFind</Text>
              <Image
                source={
                  isDarkTheme ? require('../assets/icon-basic-dark.png') : require('../assets/icon-basic.png')
                }
                style={styles.titleIcon}
              />
            </View>
            <Text selectable style={styles.subtitle}>
              A word-search game.
            </Text>
          </View>
          <View style={styles.statsRow}>
            <SettingTile
              label="Grid"
              value={`${preferredGridSize}×${preferredGridSize}`}
              onPress={() => setActiveSetting('grid')}
            />
            <SettingTile
              label="Difficulty"
              value={preferredDifficulty.toUpperCase()}
              onPress={() => setActiveSetting('difficulty')}
            />
          </View>

          <Pressable accessibilityRole="button" onPress={startGame} style={styles.primaryButton}>
            <Text selectable style={styles.primaryButtonText}>
              Create new puzzle
            </Text>
          </Pressable>

          {hasActivePuzzle ? (
            <Pressable
              accessibilityRole="button"
              onPress={returnToCurrentGame}
              style={styles.secondaryButton}
            >
              <Text selectable style={styles.secondaryButtonText}>
                Return to current puzzle
              </Text>
            </Pressable>
          ) : null}
        </View>

        <View style={[styles.section, { maxWidth: Math.min(width - 32, 760) }]}>
          <Text selectable style={styles.sectionTitle}>
            Puzzle code
          </Text>
          <View style={styles.codeCard}>
            <Text selectable style={styles.codeHint}>
              Paste a shared puzzle code to play matching puzzle.
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              placeholder="paste puzzle code here"
              placeholderTextColor={colors.muted}
              style={styles.codeInput}
              value={shareCodeInput}
              onChangeText={setShareCodeInput}
              onBlur={() => {
                const extracted = extractPuzzleCode(shareCodeInput);
                if (extracted) {
                  setShareCodeInput(extracted);
                }
              }}
              onSubmitEditing={enterShareCode}
              returnKeyType="go"
            />
            {shareCodeInput.trim().length > 0 ? (
              <Pressable accessibilityRole="button" onPress={enterShareCode} style={styles.joinButton}>
                <Text selectable style={styles.joinButtonText}>
                  Play matching puzzle
                </Text>
              </Pressable>
            ) : null}
          </View>
        </View>

        <View style={[styles.legalSection, { maxWidth: Math.min(width - 32, 760) }]}>
          <Pressable
            accessibilityRole="button"
            onPress={() => setAboutVisible(true)}
            style={styles.legalLinkPressable}
          >
            <Text selectable style={styles.legalButtonText}>
              About BockFind
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      <KeyboardToolbar>
        <KeyboardToolbar.Done text="Done" />
      </KeyboardToolbar>

      <Modal
        transparent
        animationType="fade"
        visible={aboutVisible}
        onRequestClose={() => setAboutVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { maxWidth: Math.min(width - 32, 760) }]}>
            <View style={styles.modalHeader}>
              <Text selectable style={styles.modalTitle}>
                About
              </Text>
              <Pressable
                accessibilityRole="button"
                onPress={() => setAboutVisible(false)}
                style={styles.modalCloseButton}
              >
                <Text selectable style={styles.modalCloseText}>
                  Close
                </Text>
              </Pressable>
            </View>

            <View style={styles.aboutHero}>
              <View style={styles.aboutTextBlock}>
                <Text selectable style={styles.aboutAppName}>
                  BockFind
                </Text>
                <Text selectable style={styles.aboutVersion}>
                  Version {appVersion}
                </Text>
              </View>
              <Image
                source={
                  isDarkTheme ? require('../assets/icon-basic-dark.png') : require('../assets/icon-basic.png')
                }
                style={styles.aboutIcon}
              />
            </View>

            <View style={styles.aboutSection}>
              <Text selectable style={styles.aboutSectionTitle}>
                How to Play
              </Text>
              <Text selectable style={styles.aboutBody}>
                Choose your puzzle size. Select a difficulty level. Create a new puzzle or enter a shared
                puzzle code to play a matching puzzle.
              </Text>

              <Text selectable style={styles.aboutBody}>
                Find every hidden word by tracing letters in any direction. Tap and drag across the grid, then
                use the word list to track what you have found.
              </Text>
            </View>

            <Pressable accessibilityRole="button" onPress={showLicenses} style={styles.legalLinkPressable}>
              <Text selectable style={styles.legalButtonText}>
                Show OSS Licenses
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
                    onPress={() => setPreferredGridSize(option)}
                    style={[styles.pickerChip, option === preferredGridSize && styles.pickerChipSelected]}
                  >
                    <Text
                      selectable
                      style={[
                        styles.pickerChipText,
                        option === preferredGridSize && styles.pickerChipTextSelected,
                      ]}
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
                    selected={preferredDifficulty === option}
                    onPress={() => setPreferredDifficulty(option)}
                  />
                ))}
              </View>
            ) : null}
          </View>
        </View>
      </Modal>
    </>
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
      padding: 12,
      gap: 18,
      boxShadow: `0 30px 80px ${colors.shadow}`,
    },
    title: {
      fontSize: 44,
      fontWeight: '700',
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    headerRow: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    },
    titleIcon: {
      width: 48,
      height: 48,
      borderRadius: 8,
    },

    kicker: {
      color: colors.accent,
      fontSize: 12,
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: 1.8,
    },
    subtitle: {
      color: colors.muted,
      fontSize: 15,
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
    legalSection: {
      width: '100%',
      paddingTop: 2,
      alignItems: 'center',
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 22,
      fontWeight: '900',
      letterSpacing: -0.4,
    },
    legalLinkPressable: {
      paddingVertical: 4,
      paddingHorizontal: 2,
    },
    legalButtonText: {
      color: colors.accent,
      fontSize: 14,
      fontWeight: '700',
      textDecorationLine: 'underline',
      textAlign: 'center',
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
      paddingVertical: 16,
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
    aboutHero: {
      flexDirection: 'row',
      gap: 14,
      paddingVertical: 6,
    },
    aboutIcon: {
      width: 64,
      height: 64,
      borderRadius: 14,
    },
    aboutTextBlock: {
      gap: 4,
    },
    aboutAppName: {
      color: colors.text,
      fontSize: 24,
      fontWeight: '900',
      letterSpacing: -0.4,
    },
    aboutVersion: {
      color: colors.muted,
      fontSize: 14,
      fontWeight: '700',
    },
    aboutSection: {
      gap: 8,
      paddingTop: 4,
    },
    aboutSectionTitle: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '900',
    },
    aboutBody: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 22,
    },
    licenseButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor: colors.accentStrong,
      paddingVertical: 14,
    },
    licenseButtonText: {
      color: colors.onAccent,
      fontSize: 15,
      fontWeight: '900',
      letterSpacing: 0.5,
    },
  });
}
