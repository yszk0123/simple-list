import { Item } from './Item';
import { updateAt } from './utils/Range';

export interface List {
  id: string;
  items: Item[];
}

export function updateItemAt(
  list: List,
  index: number,
  updater: (item: Item, index: number) => Item,
): List {
  const newItems = updateAt(list.items, index, updater);

  return { ...list, items: newItems };
}
