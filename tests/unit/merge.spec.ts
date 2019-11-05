import merge from '@/utilities/merge';

describe('merge.ts', () => {
  test('merges 2 functions together', () => {
    const mock1 = jest.fn(() => 0);
    const mock2 = jest.fn(() => 1 + 1);
    const merged = merge(mock1, mock2, 'key');
    merged();
    expect(mock1.mock.calls.length).toEqual(1);
    expect(mock2.mock.calls.length).toEqual(1);
  });
  test('if params are not functions no return value', () => {
    const mock1 = jest.fn(() => 0);
    const mock2 = 'should not return function';
    const merged = merge(mock1, mock2, 'key');
    expect(merged).toEqual(undefined);
  });
});
