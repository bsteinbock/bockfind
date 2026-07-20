import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useSharedValue } from 'react-native-reanimated';
import Svg, { Rect } from 'react-native-svg';

import { cellKey, getSelectionCell, snapSelectionLine } from '../engine/selection';
import { GameCell } from './game-cell';
import { type ThemeColors, useThemeColors } from '../theme/colors';
import type { Difficulty, Position, Puzzle } from '../types/game';

interface FoundWordPill {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  angle: number;
}

function buildFoundWordPill(start: Position, end: Position, cellSize: number): FoundWordPill {
  const startX = start.col * cellSize + cellSize / 2;
  const startY = start.row * cellSize + cellSize / 2;
  const endX = end.col * cellSize + cellSize / 2;
  const endY = end.row * cellSize + cellSize / 2;
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  return {
    centerX: (startX + endX) / 2,
    centerY: (startY + endY) / 2,
    width: Math.hypot(deltaX, deltaY) + cellSize * 0.92,
    height: Math.max(16, cellSize * 0.82),
    angle: (Math.atan2(deltaY, deltaX) * 180) / Math.PI,
  };
}

interface GameBoardProps {
  puzzle: Puzzle;
  cellSize: number;
  selection: Position[];
  foundWords: string[];
  onSelectionChange: (selection: Position[]) => void;
  onSelectionStart: () => void;
  onSelectionEnd: () => void;
}

export function GameBoard({
  puzzle,
  cellSize,
  selection,
  foundWords,
  onSelectionChange,
  onSelectionStart,
  onSelectionEnd,
}: GameBoardProps) {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const selectedKeys = useMemo(() => new Set(selection.map(cellKey)), [selection]);
  const anchor = useSharedValue<Position | null>(null);
  const foundColor = colors.foundWordHighlight;
  const foundWordsSet = useMemo(() => new Set(foundWords), [foundWords]);
  const foundKeySet = useMemo(() => {
    const keySet = new Set<string>();

    for (const word of puzzle.words) {
      if (!foundWordsSet.has(word.text)) {
        continue;
      }

      for (const position of word.cells) {
        keySet.add(cellKey(position));
      }
    }

    return keySet;
  }, [foundWordsSet, puzzle.words]);
  const foundWordPills = useMemo(
    () =>
      puzzle.words
        .filter((word) => foundWordsSet.has(word.text))
        .map((word) => ({ key: word.text, pill: buildFoundWordPill(word.start, word.end, cellSize) })),
    [cellSize, foundWordsSet, puzzle.words],
  );

  const boardSize = puzzle.size;
  const boardPixels = cellSize * boardSize;
  const difficulty = puzzle.difficulty as Difficulty;

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .minDistance(0)
        .onBegin((event) => {
          'worklet';
          const startCell = getSelectionCell(event.x, event.y, cellSize, boardSize);

          if (!startCell) {
            return;
          }

          anchor.value = startCell;
          runOnJS(onSelectionStart)();
          runOnJS(onSelectionChange)([startCell]);
        })
        .onUpdate((event) => {
          'worklet';
          const startCell = anchor.value;

          if (!startCell) {
            return;
          }

          const targetCell = getSelectionCell(event.x, event.y, cellSize, boardSize);

          if (!targetCell) {
            return;
          }

          const nextSelection = snapSelectionLine(startCell, targetCell, difficulty, boardSize);
          runOnJS(onSelectionChange)(nextSelection);
        })
        .onEnd(() => {
          'worklet';
          anchor.value = null;
          runOnJS(onSelectionEnd)();
        }),
    [anchor, boardSize, cellSize, difficulty, onSelectionChange, onSelectionEnd, onSelectionStart],
  );

  return (
    <View
      style={[
        styles.board,
        { width: boardPixels, height: boardPixels, borderRadius: Math.max(20, Math.floor(cellSize * 0.5)) },
      ]}
    >
      <View style={{ width: boardPixels, height: boardPixels }}>
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          <Svg height={boardPixels} width={boardPixels}>
            {foundWordPills.map(({ key, pill }) => (
              <Rect
                key={key}
                x={pill.centerX - pill.width / 2}
                y={pill.centerY - pill.height / 2}
                width={pill.width}
                height={pill.height}
                rx={pill.height / 2}
                ry={pill.height / 2}
                fill="transparent"
                stroke={foundColor}
                strokeWidth={2.5}
                transform={`rotate(${pill.angle} ${pill.centerX} ${pill.centerY})`}
              />
            ))}
          </Svg>
        </View>
        {puzzle.grid.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.row}>
            {row.map((letter, colIndex) => {
              const key = `${rowIndex}:${colIndex}`;

              return (
                <GameCell
                  key={key}
                  letter={letter}
                  size={cellSize}
                  selected={selectedKeys.has(key)}
                  found={foundKeySet.has(key)}
                  foundColor={foundColor}
                />
              );
            })}
          </View>
        ))}
        <GestureDetector gesture={gesture}>
          <View pointerEvents="box-only" style={[StyleSheet.absoluteFill, styles.gestureLayer]} />
        </GestureDetector>
      </View>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    board: {
      backgroundColor: colors.panel,
      borderWidth: 1,
      borderColor: colors.border,
      overflow: 'hidden',
      boxShadow: `0 24px 60px ${colors.shadow}`,
    },
    row: {
      flexDirection: 'row',
    },
    gestureLayer: {
      backgroundColor: 'transparent',
    },
  });
}
