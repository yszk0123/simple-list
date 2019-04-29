import assert from 'assert';
import { Item } from './Item';
import {
  getParentOrPrevSibling,
  getRangeOfSelfAndChildren,
} from './ItemFinder';
import { updateRange } from './utils/Range';

export function indent(items: Item[], index: number): Item[] {
  assert(index < items.length, 'out of range');

  const prev = getParentOrPrevSibling(items, index);
  if (prev === null) {
    return items;
  }
  if (items[index].level - prev.level >= 1) {
    return items;
  }

  const range = getRangeOfSelfAndChildren(items, index);

  return updateRange(items, range, item => ({
    level: item.level + 1,
    value: item.value,
  }));
}
