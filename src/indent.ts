import assert from 'assert';
import { Item } from './Item';
import {
  getParentOrPrevSibling,
  getRangeOfSelfAndChildren,
} from './ItemFinder';
import { updateRange } from './utils/Range';

function canIndent(items: Item[], index: number): boolean {
  const prev = getParentOrPrevSibling(items, index);
  const current = items[index];

  return prev !== null && current.level < prev.level + 1;
}

export function indent(items: Item[], index: number): Item[] {
  assert(index < items.length, 'out of range');

  if (!canIndent(items, index)) {
    return items;
  }

  const range = getRangeOfSelfAndChildren(items, index);

  return updateRange(items, range, item => ({
    level: item.level + 1,
    value: item.value,
  }));
}
