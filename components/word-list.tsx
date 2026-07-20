import { useMemo } from 'react';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { type ThemeColors, useThemeColors } from '../theme/colors';

interface WordListProps {
  words: string[];
  foundWords: string[];
}

function WordListView({ words, foundWords }: WordListProps) {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      {words.map((word) => {
        const found = foundWords.includes(word);

        return (
          <View key={word} style={[styles.wordChip, found && styles.wordChipFound]}>
            <Text selectable style={[styles.word, found && styles.wordFound]}>
              {found ? `✓ ${word}` : word}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export const WordList = memo(WordListView);

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    wordChip: {
      minWidth: '30%',
      flexGrow: 1,
      borderRadius: 16,
      backgroundColor: colors.surfaceSubtle,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    wordChipFound: {
      backgroundColor: colors.successSoft,
      borderColor: colors.success,
    },
    word: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '800',
      letterSpacing: 0.7,
    },
    wordFound: {
      color: colors.success,
      fontWeight: '900',
    },
  });
}
