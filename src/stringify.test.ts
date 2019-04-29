import { Item } from './Item';
import { stringify } from './stringify';

describe('stringify', () => {
  test('empty', () => {
    const input: Item[] = [];
    expect(stringify(input)).toBe('');
  });

  test('single line', () => {
    const input: Item[] = [{ level: 0, value: 'one' }];
    expect(stringify(input)).toBe('- one');
  });

  test('multiple lines', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 0, value: 'two' },
    ];
    expect(stringify(input)).toBe(
      `
- one
- two
`.trim(),
    );
  });

  test('nested lines', () => {
    const input: Item[] = [
      { level: 0, value: 'one' },
      { level: 1, value: 'one.one' },
      { level: 0, value: 'two' },
    ];
    expect(stringify(input)).toBe(
      `
- one
  - one.one
- two
`.trim(),
    );
  });
});
