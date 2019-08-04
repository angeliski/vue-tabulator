import joint from '@/utilities/joint'

describe('joint.ts', () => {
  test('joins 2 functions with no params', () => {
    const mock1 = jest.fn(() => 0)
    const mock2 = jest.fn(() => 2)
    const fn3 = joint([mock1,mock2])
    fn3()
    expect(mock1.mock.calls.length).toEqual(1);
    expect(mock2.mock.calls.length).toEqual(1);
  });
  test('join 2 functions with same params', () => {
    const mock1 = jest.fn((a,b) => a * b)
    const mock2 = jest.fn((a,b) => a + b)
    const fn3 = joint([mock1,mock2])
    fn3(1,2)
    expect(mock1.mock.calls.length).toEqual(1);
    expect(mock2.mock.calls.length).toEqual(1);
    expect(mock1.mock.calls[0][0]).toEqual(1);
    expect(mock1.mock.calls[0][1]).toEqual(2);
    expect(mock2.mock.calls[0][0]).toEqual(1);
    expect(mock2.mock.calls[0][1]).toEqual(2);
  });
  test('joins more than 2 functions', () => {
    const mock1 = jest.fn((a,b) => a * b)
    const mock2 = jest.fn((a,b) => a + b)
    const mock3 = jest.fn((a,b) => a + b)
    const fn3 = joint([mock1,mock2,mock3])
    fn3(1,2)
    expect(mock1.mock.calls.length).toEqual(1)
    expect(mock2.mock.calls.length).toEqual(1)
    expect(mock3.mock.calls.length).toEqual(1)
  })
});
