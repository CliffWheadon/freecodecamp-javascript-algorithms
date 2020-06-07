const telephoneCheck = require('../src/telephoneCheck');

test('telephoneCheck("555-555-5555") should return a boolean.', () => {
  expect(telephoneCheck("555-555-5555")).toBe(true);
});

test('telephoneCheck("1 555-555-5555") should return true.', () => {
  expect(telephoneCheck("1 555-555-5555")).toBe(true);
});

test('telephoneCheck("1 (555) 555-5555") should return true.', () => {
  expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
});

test('telephoneCheck("5555555555") should return true.', () => {
  expect(telephoneCheck("5555555555")).toBe(true);
});

test('telephoneCheck("555-555-5555") should return true.', () => {
  expect(telephoneCheck("555-555-5555")).toBe(true);
});

test('telephoneCheck("(555)555-5555") should return true.', () => {
  expect(telephoneCheck("(555)555-5555")).toBe(true);
});

test('telephoneCheck("1(555)555-5555") should return true.', () => {
  expect(telephoneCheck("1(555)555-5555")).toBe(true);
});

test('telephoneCheck("1 555 555 5555") should return true.', () => {
  expect(telephoneCheck("1 555 555 5555")).toBe(true);
});

test('telephoneCheck("1 456 789 4444") should return true.', () => {
  expect(telephoneCheck("1 456 789 4444")).toBe(true);
});

test('telephoneCheck("2 757 622-7382") should return false.', () => {
  expect(telephoneCheck("2 757 622-7382")).toBe(false);
});

test('telephoneCheck("0 (757) 622-7382") should return false.', () => {
  expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
});

test('telephoneCheck("27576227382") should return false.', () => {
  expect(telephoneCheck("27576227382")).toBe(false);
});

test('telephoneCheck("2(757)6227382") should return false.', () => {
  expect(telephoneCheck("2(757)6227382")).toBe(false);
});

test('telephoneCheck("(555-555-5555") should return false.', () => {
  expect(telephoneCheck("(555-555-5555")).toBe(false);
})

test('telephoneCheck("555-5555") should return false.', () => {
  expect(telephoneCheck("555-5555")).toBe(false);
});

test('telephoneCheck("5555555") should return false.', () => {
  expect(telephoneCheck("5555555")).toBe(false);
})
