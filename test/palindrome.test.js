const palindrome = require('../src/palindrome');

test('palindrome("eye") should return true.', () => {
  expect(palindrome("eye")).toBe(true);
});

test('palindrome("_eye") should return true.', () => {
  expect(palindrome("_eye")).toBe(true);
});

test('palindrome("race car") should return true.', () => {
  expect(palindrome("race car")).toBe(true);
});

test('palindrome("not a palindrome") should return false.', () => {
  expect(palindrome("not a palindrome")).toBe(false);
});

test('palindrome("A man, a plan, a canal. Panama") should return true.', () => {
  expect(palindrome("A man, a plan, a canal. Panama")).toBe(true);
});

test('palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
  expect(palindrome("My age is 0, 0 si ega ym.")).toBe(true);
})