import assert from 'assert';
import { Item } from './Item';
import {
  getParentOrPrevSibling,
  getRangeOfSelfAndChildren,
} from './ItemFinder';
import { updateRange } from './utils/Range';

function canOutdent(items: Item[], index: number): boolean {
  const prev = getParentOrPrevSibling(items, index);
  const current = items[index];

  return prev !== null && current.level > 0;
}

export function outdent(items: Item[], index: number): Item[] {
  assert(index < items.length, 'out of range');

  if (!canOutdent(items, index)) {
    return items;
  }

  const range = getRangeOfSelfAndChildren(items, index);

  return updateRange(items, range, item => ({
    level: Math.max(0, item.level - 1),
    value: item.value,
  }));
}
