import { memo, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { colors } from '../theme/colors';

interface GameCellProps {
  letter: string;
  size: number;
  selected: boolean;
  found: boolean;
  foundColor?: string;
}

function GameCellView({ letter, size, selected, found, foundColor }: GameCellProps) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withTiming(found ? 1.08 : selected ? 1.05 : 1, { duration: 140 });
  }, [found, scale, selected]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.cell,
        {
          width: size,
          height: size,
          borderRadius: Math.max(10, Math.floor(size * 0.2)),
        },
        animatedStyle,
      ]}
    >
      <Text
        selectable
        style={[
          styles.letter,
          {
            fontSize: Math.max(11, Math.floor(size * 0.42)),
            color: found ? (foundColor ?? colors.success) : selected ? colors.accent : colors.text,
            fontWeight: found ? '900' : '800',
          },
        ]}
      >
        {letter}
      </Text>
    </Animated.View>
  );
}

export const GameCell = memo(GameCellView);

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  letter: {
    color: colors.text,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.75,
  },
});
