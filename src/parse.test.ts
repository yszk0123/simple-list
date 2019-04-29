import { parse } from './parse';

describe('parse', () => {
  test('empty', () => {
    const input = ''.trim();
    expect(parse(input)).toEqual([]);
  });

  test('ignore invalid lines', () => {
    const input = `
- one
two
- three
`.trim();
    expect(parse(input)).toEqual([
      { level: 0, value: 'one' },
      { level: 0, value: 'three' },
    ]);
  });

  test('single line', () => {
    const input = `
- one
`.trim();
    expect(parse(input)).toEqual([{ level: 0, value: 'one' }]);
  });

  test('multiple lines', () => {
    const input = `
- one
- two
`.trim();
    expect(parse(input)).toEqual([
      { level: 0, value: 'one' },
      { level: 0, value: 'two' },
    ]);
  });

  test('nested lines', () => {
    const input = `
- one
  - one.one
- two
`.trim();
    expect(parse(input)).toEqual([
      { level: 0, value: 'one' },
      { level: 1, value: 'one.one' },
      { level: 0, value: 'two' },
    ]);
  });
});
