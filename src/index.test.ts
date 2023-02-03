import { add } from '.';

describe('Test function for sonar', () => {
  test('', () => {
    const a = 1;
    const b = 1;
    const result = add(a, b);
    expect(result).toBe(2);
  });
});
