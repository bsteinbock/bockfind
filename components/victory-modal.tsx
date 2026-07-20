import { useMemo } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn } from 'react-native-reanimated';

import { type ThemeColors, useThemeColors } from '../theme/colors';

interface VictoryModalProps {
  visible: boolean;
  score: number;
  elapsedSeconds: number;
  wordsFound: number;
  totalWords: number;
  onPlayAgain: () => void;
}

export function VictoryModal({
  visible,
  score,
  elapsedSeconds,
  wordsFound,
  totalWords,
  onPlayAgain,
}: VictoryModalProps) {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Modal transparent visible={visible} animationType="none" statusBarTranslucent>
      <Animated.View entering={FadeIn.duration(180)} exiting={FadeOut.duration(140)} style={styles.overlay}>
        <Animated.View entering={ZoomIn.springify().damping(16)} style={styles.card}>
          <Text selectable style={styles.kicker}>
            Puzzle complete
          </Text>
          <Text selectable style={styles.title}>
            Nice work.
          </Text>
          <Text selectable style={styles.summary}>
            You found {wordsFound} of {totalWords} words in {elapsedSeconds}s for a score of {score}.
          </Text>
          <Pressable accessibilityRole="button" onPress={onPlayAgain} style={styles.button}>
            <Text selectable style={styles.buttonText}>
              Play again
            </Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      backgroundColor: colors.overlay,
    },
    card: {
      width: '100%',
      maxWidth: 440,
      borderRadius: 32,
      backgroundColor: colors.panelElevated,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 24,
      gap: 14,
      boxShadow: `0 28px 80px ${colors.shadow}`,
    },
    kicker: {
      color: colors.accent,
      fontSize: 12,
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: 1.6,
    },
    title: {
      color: colors.text,
      fontSize: 30,
      fontWeight: '900',
      letterSpacing: -0.4,
    },
    summary: {
      color: colors.muted,
      fontSize: 15,
      lineHeight: 22,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      backgroundColor: colors.accentStrong,
      paddingVertical: 14,
    },
    buttonText: {
      color: colors.onAccent,
      fontSize: 15,
      fontWeight: '900',
      letterSpacing: 0.5,
    },
  });
}
