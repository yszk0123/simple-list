export interface Range {
  from: number;
  to: number;
}

export function updateRange<T>(
  values: T[],
  range: Range,
  updater: (value: T, index: number) => T,
): T[] {
  return values.map((value, i) =>
    inRange(i, range) ? updater(value, i) : value,
  );
}

function inRange(index: number, { from, to }: Range): boolean {
  return index >= from && index < to;
}
