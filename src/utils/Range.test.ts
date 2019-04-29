import { updateAt, updateRange } from './Range';

describe('updateRange', () => {
  test('update range', () => {
    const input = ['one', 'two', 'three', 'four'];
    const range = { from: 1, to: 3 };

    expect(updateRange(input, range, v => v.toUpperCase())).toEqual([
      'one',
      'TWO',
      'THREE',
      'four',
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
