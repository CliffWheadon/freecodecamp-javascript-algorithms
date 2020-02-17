const sumFibs = require("../src/sumOddFibs");

test('sumFibs(1) should return 1', () => {
    expect(sumFibs(1)).toBe(2);
});

test('sumFibs(1000) should return 1785.', () => {
   expect(sumFibs(1000)).toBe(1785);
});

test(`sumFibs(75024) should return 60696.`, () => {
   expect(sumFibs(75024)) .toBe(60696);
});
