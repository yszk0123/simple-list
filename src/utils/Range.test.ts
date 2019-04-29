import { updateRange } from './Range';

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
