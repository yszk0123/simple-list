import { Item } from './Item';
import { repeat } from './utils/repeat';

export function stringify(input: Item[]): string {
  return input
    .map(item => `${repeat('  ', item.level)}- ${item.value}`)
    .join('\n');
}
