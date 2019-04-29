import { Item } from './Item';
import { findBackward } from './utils/findBackward';
import { Range } from './utils/Range';

export function getRangeOfSelfAndChildren(items: Item[], index: number): Range {
  const self = items[index];
  let i = index + 1;
  for (; i < items.length; i += 1) {
    const item = items[i];
    if (item.level <= self.level) {
      break;
    }
  }
  return { from: index, to: i };
}

export function getParentOrPrevSibling(
  items: Item[],
  index: number,
): Item | null {
  if (index === 0 || index >= items.length) {
    return null;
  }

  const level = items[index].level;
  return findBackward(
    items,
    index - 1,
    item => item.level === level || item.level === level - 1,
  );
}
