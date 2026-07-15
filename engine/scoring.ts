export function scoreForWord(word: string, elapsedSeconds: number, foundCount: number): number {
  const baseScore = 100 + word.length * 10;
  const speedBonus = Math.max(0, 80 - elapsedSeconds * 2);
  const chainBonus = Math.min(40, foundCount * 4);

  return baseScore + speedBonus + chainBonus;
}