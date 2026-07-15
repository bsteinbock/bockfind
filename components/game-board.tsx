import { useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { cellKey, getSelectionCell, snapSelectionLine } from '../engine/selection';
import { GameCell } from './game-cell';
import { colors } from '../theme/colors';
import type { Difficulty, Position, Puzzle } from '../types/game';

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
  const selectedKeys = useMemo(() => new Set(selection.map(cellKey)), [selection]);
  const anchorRef = useRef<Position | null>(null);
  const foundKeySet = useMemo(() => {
    const keySet = new Set<string>();

    for (const word of puzzle.words) {
      if (!foundWords.includes(word.text)) {
        continue;
      }

      for (const position of word.cells) {
        keySet.add(cellKey(position));
      }
    }

    return keySet;
  }, [foundWords, puzzle.words]);

  const boardSize = puzzle.size;
  const boardPixels = cellSize * boardSize;
  const difficulty = puzzle.difficulty as Difficulty;

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .minDistance(0)
        .onBegin((event) => {
          const startCell = getSelectionCell(event.x, event.y, cellSize, boardSize);

          if (!startCell) {
            return;
          }

          anchorRef.current = startCell;
          onSelectionStart();
          onSelectionChange([startCell]);
        })
        .onUpdate((event) => {
          const anchor = anchorRef.current;

          if (!anchor) {
            return;
          }

          const targetCell = getSelectionCell(event.x, event.y, cellSize, boardSize);

          if (!targetCell) {
            return;
          }

          const nextSelection = snapSelectionLine(anchor, targetCell, difficulty, boardSize);
          onSelectionChange(nextSelection);
        })
        .onEnd(() => {
          anchorRef.current = null;
          onSelectionEnd();
        }),
    [boardSize, cellSize, difficulty, onSelectionChange, onSelectionEnd, onSelectionStart],
  );

  return (
    <View
      style={[
        styles.board,
        { width: boardPixels, height: boardPixels, borderRadius: Math.max(20, Math.floor(cellSize * 0.5)) },
      ]}
    >
      <View style={{ width: boardPixels, height: boardPixels }}>
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

const styles = StyleSheet.create({
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