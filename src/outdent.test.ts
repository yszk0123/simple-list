import { Item } from './Item';
import { outdent } from './outdent';

describe('outdent', () => {
  test('empty', () => {
    const input: Item[] = [];

    expect(() => outdent(input, 0)).toThrow();
  });

  test('first line', () => {
    const input: Item[] = [{ level: 0, value: 'one' }];

    expect(outdent(input, 0)).toEqual([{ level: 0, value: 'one' }]);
  });

  test('multiple line', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 1, value: 'two' },
    ];

    expect(outdent(input, 1)).toEqual([
      { level: 0, value: 'one' },
      { level: 0, value: 'two' },
    ]);
  });

  test('up to zero', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 1, value: 'one.one' },
      { level: 0, value: 'two' },
    ];

    expect(outdent(input, 2)).toEqual([
      { level: 0, value: 'one' },
      { level: 1, value: 'one.one' },
      { level: 0, value: 'two' },
    ]);
  });

  test('with children', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 1, value: 'two.one' },
      { level: 2, value: 'two.two' },
      { level: 3, value: 'two.two.one' },
      { level: 1, value: 'two.three' },
    ];

    expect(outdent(input, 1)).toEqual([
      { level: 0, value: 'one' },
      { level: 0, value: 'two.one' },
      { level: 1, value: 'two.two' },
      { level: 2, value: 'two.two.one' },
      { level: 1, value: 'two.three' },
    ]);
  });
});
