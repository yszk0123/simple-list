export function findBackward<T>(
  values: T[],
  index: number,
  predicate: (value: T, index: number) => boolean,
): T | null {
  for (let i = index; i >= 0; i -= 1) {
    if (predicate(values[i], i)) {
      return values[i];
    }
  }
  return null;
}
