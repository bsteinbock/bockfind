import { DIFFICULTY_CONFIG, type Direction } from '../constants/directions';
import type { Difficulty, Position } from '../types/game';

export function cellKey(position: Position): string {
  return `${position.row}:${position.col}`;
}

export function isSameCell(a: Position | null, b: Position | null): boolean {
  return Boolean(a && b && a.row === b.row && a.col === b.col);
}

export function getSelectionCell(
  x: number,
  y: number,
  cellSize: number,
  boardSize: number,
): Position | null {
  const row = Math.floor(y / cellSize);
  const col = Math.floor(x / cellSize);

  if (row < 0 || col < 0 || row >= boardSize || col >= boardSize) {
    return null;
  }

  return { row, col };
}

export function snapSelectionLine(
  start: Position,
  target: Position,
  difficulty: Difficulty,
  boardSize: number,
): Position[] {
  const config = DIFFICULTY_CONFIG[difficulty];
  const deltaRow = target.row - start.row;
  const deltaCol = target.col - start.col;
  const distance = Math.hypot(deltaRow, deltaCol);

  if (distance < 0.65) {
    return [start];
  }

  let bestDirection: Direction | null = null;
  let bestScore = Number.NEGATIVE_INFINITY;

  for (const direction of config.directions) {
    const directionLength = Math.hypot(direction.row, direction.col) || 1;
    const score =
      (deltaRow * direction.row + deltaCol * direction.col) /
      (distance * directionLength);

    if (score > bestScore) {
      bestScore = score;
      bestDirection = direction;
    }
  }

  if (!bestDirection || bestScore < 0.2) {
    return [start];
  }

  const length = Math.max(Math.abs(deltaRow), Math.abs(deltaCol));
  const cells: Position[] = [];

  for (let index = 0; index <= length; index += 1) {
    const row = start.row + bestDirection.row * index;
    const col = start.col + bestDirection.col * index;

    if (row < 0 || col < 0 || row >= boardSize || col >= boardSize) {
      break;
    }

    cells.push({ row, col });
  }

  return cells.length > 0 ? cells : [start];
}

export function positionsToKeys(positions: Position[]): string[] {
  return positions.map(cellKey);
}