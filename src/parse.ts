import { Item } from './Item';
import { isNotNull } from './utils/isNotNull';

export function parse(input: string): Item[] {
  return input
    .trim()
    .split(/\r?\n/)
    .map(parseLine)
    .filter(isNotNull);
}

function parseLine(input: string): Item | null {
  const match = /^(\s*)-\s+(.*)\s*$/.exec(input);
  if (!match) {
    return null;
  }
  const level = Math.floor(match[1].length / 2);
  const value = match[2];
  return { level, value };
}
