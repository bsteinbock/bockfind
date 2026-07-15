import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import type { Difficulty } from '../types/game';

interface DifficultyCardProps {
  difficulty: Difficulty;
  title: string;
  subtitle: string;
  selected: boolean;
  onPress: () => void;
}

export function DifficultyCard({ difficulty, title, subtitle, selected, onPress }: DifficultyCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.cardHeader}>
        <Text selectable style={styles.title}>
          {title}
        </Text>
        <View style={[styles.badge, selected && styles.badgeSelected]}>
          <Text selectable style={styles.badgeText}>
            {difficulty.toUpperCase()}
          </Text>
        </View>
      </View>
      <Text selectable style={styles.subtitle}>
        {subtitle}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 10,
  },
  cardSelected: {
    backgroundColor: colors.panelElevated,
    borderColor: colors.accent,
  },
  cardPressed: {
    transform: [{ scale: 0.99 }],
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  badgeSelected: {
    backgroundColor: colors.accentStrong,
  },
  badgeText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
});