import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { DifficultyCard } from '../components/difficulty-card';
import { DIFFICULTY_CONFIG } from '../constants/directions';
import { colors } from '../theme/colors';
import type { Difficulty } from '../types/game';

const DIFFICULTY_DETAILS: Record<Difficulty, { title: string; subtitle: string }> = {
  easy: {
    title: 'Easy',
    subtitle: '10x10 grid with straight words to warm up.',
  },
  medium: {
    title: 'Medium',
    subtitle: 'A bigger grid with diagonals and more hiding spots.',
  },
  hard: {
    title: 'Hard',
    subtitle: 'Backwards words, tougher overlaps, and sharper focus.',
  },
  expert: {
    title: 'Expert',
    subtitle: 'The biggest board with the longest word list.',
  },
};

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  const selectedConfig = useMemo(() => DIFFICULTY_CONFIG[difficulty], [difficulty]);

  const startGame = () => {
    router.push({
      pathname: '/game',
      params: {
        difficulty,
        seed: String(Date.now()),
      },
    });
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.scrollContent}
    >
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
          A tactile word-search game built for phones and iPads. Drag across the grid, snap to clean directions,
          and clear every hidden word.
        </Text>

        <View style={styles.statsRow}>
          <Stat label="Grid" value={`${selectedConfig.size}×${selectedConfig.size}`} />
          <Stat label="Words" value={`${selectedConfig.wordCount}`} />
          <Stat label="Mode" value={difficulty.toUpperCase()} />
        </View>

        <Pressable accessibilityRole="button" onPress={startGame} style={styles.primaryButton}>
          <Text selectable style={styles.primaryButtonText}>
            Start puzzle
          </Text>
        </Pressable>
      </View>

      <View style={[styles.section, { maxWidth: Math.min(width - 32, 760) }]}>
        <Text selectable style={styles.sectionTitle}>
          Choose a difficulty
        </Text>
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
      </View>

      <View style={[styles.section, { maxWidth: Math.min(width - 32, 760) }]}>
        <Text selectable style={styles.sectionTitle}>
          How to play
        </Text>
        <View style={styles.helpCard}>
          <Text selectable style={styles.helpText}>
            Drag across the board to trace a word. The line locks to one of the allowed directions, then the game
            validates the letters when you lift your finger.
          </Text>
          <Text selectable style={styles.helpText}>
            Found words light up in the board and list. Finish the full list to unlock the victory screen.
          </Text>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: 'rgba(125, 211, 252, 0.2)',
  },
  glowTwo: {
    position: 'absolute',
    left: -48,
    bottom: -56,
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: 'rgba(52, 211, 153, 0.16)',
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
    fontSize: 20,
    fontWeight: '900',
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.accentStrong,
    paddingVertical: 16,
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.7,
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
  helpCard: {
    borderRadius: 28,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    gap: 12,
  },
  helpText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
  },
});