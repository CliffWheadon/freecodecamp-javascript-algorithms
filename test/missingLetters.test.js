const fearNotLetter = require("../src/missingLetters");

test('fearNotLetter("abce") should return "d".', () => {
    expect(fearNotLetter("abce")).toBe("d");
});

test('fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.', () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(undefined);
});