import { indent } from './indent';
import { Item } from './Item';

describe('indent', () => {
  test('empty', () => {
    const input: Item[] = [];

    expect(indent(input, 0)).toEqual([]);
  });

  test('first line', () => {
    const input: Item[] = [{ level: 0, value: 'one' }];

    expect(indent(input, 0)).toEqual([{ level: 0, value: 'one' }]);
  });

  test('multiple line', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 0, value: 'two' },
    ];

    expect(indent(input, 1)).toEqual([
      { level: 0, value: 'one' },
      { level: 1, value: 'two' },
    ]);
  });

  test('indent is limited to one level', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 1, value: 'one.one' },
    ];

    expect(indent(input, 1)).toEqual([
      { level: 0, value: 'one' },
      { level: 1, value: 'one.one' },
    ]);
  });

  test('with children', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 0, value: 'two.one' },
      { level: 1, value: 'two.two' },
      { level: 2, value: 'two.two.one' },
      { level: 0, value: 'three' },
    ];

    expect(indent(input, 1)).toEqual([
      { level: 0, value: 'one' },
      { level: 1, value: 'two.one' },
      { level: 2, value: 'two.two' },
      { level: 3, value: 'two.two.one' },
      { level: 0, value: 'three' },
    ]);
  });
});
