import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

interface WordListProps {
  words: string[];
  foundWords: string[];
}

function WordListView({ words, foundWords }: WordListProps) {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  wordChip: {
    minWidth: '30%',
    flexGrow: 1,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  wordChipFound: {
    backgroundColor: colors.successSoft,
    borderColor: 'rgba(52, 211, 153, 0.42)',
  },
  word: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.7,
  },
  wordFound: {
    color: colors.success,
  },
});