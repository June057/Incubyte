import add from '../stringCalc';

describe('add function', () => {
  test('sums positive numbers in a simple string', () => {
    expect(add('12345')).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  test('returns error for negative numbers', () => {
    expect(add('1-2-3')).toBe('negative numbers not allowed 2,3');
  });

  test('returns 0 when no numbers are present', () => {
    expect(add('abc')).toBe(0);
  });

  test('handles mixed content', () => {
    expect(add("1\n2,3")).toBe(6); // 1 + 2 + 3 = 6
  });
  test('handles mixed content with delimiter', () => {
    expect(add("//;\n1;2")).toBe(3); // 1 + 2 = 3
  });

  test('handles string with only negative numbers', () => {
    expect(add('-1-2-3')).toBe('negative numbers not allowed 1,2,3');
  });

  test('handles empty string', () => {
    expect(add('')).toBe(0);
  });
});
