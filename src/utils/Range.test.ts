import { updateAt, updateRange } from './Range';

describe('updateRange', () => {
  test('update range', () => {
    const input = ['one', 'two', 'three'];
    const range = { from: 1, to: 2 };

    expect(updateRange(input, range, v => v.toUpperCase())).toEqual([
      'one',
      'TWO',
      'three',
    ]);
  });
});

describe('updateAt', () => {
  test('update at', () => {
    const input = ['one', 'two', 'three'];

    expect(updateAt(input, 1, v => v.toUpperCase())).toEqual([
      'one',
      'TWO',
      'three',
    ]);
  });
});
