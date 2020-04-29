const convertToRoman = require('../src/convertToRoman');

test('convertToRoman(2) should return "II"', () => {
  expect(convertToRoman(2)).toBe('II');
});

test('convertToRoman(16) should return "XVI"', () => {
  expect(convertToRoman(16)).toBe('XVI');
});

test('convertToRoman(649) should return "DCXLIX"', () => {
  expect(convertToRoman(649)).toBe('DCXLIX');
});

test('convertToRoman(1023) should return "MXXIII"', () => {
  expect(convertToRoman(1023)).toBe('MXXIII');
});

test('convertToRoman(3999) should return "MMMCMXCIX"', () => {
  expect(convertToRoman(3999)).toBe('MMMCMXCIX');
});
