export interface SeededRandom {
  next: () => number;
  int: (maxExclusive: number) => number;
  pick: <T>(values: readonly T[]) => T;
  shuffle: <T>(values: readonly T[]) => T[];
}

export function hashSeed(value: string): number {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0 || 1;
}

export function createSeededRandom(seed: number): SeededRandom {
  let state = seed >>> 0 || 1;

  const next = () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };

  return {
    next,
    int(maxExclusive) {
      return Math.floor(next() * maxExclusive);
    },
    pick(values) {
      return values[this.int(values.length)];
    },
    shuffle(values) {
      const copy = [...values];

      for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = this.int(index + 1);
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
      }

      return copy;
    },
  };
}