export function repeat(value: string, n: number): string {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += value;
  }
  return result;
}
