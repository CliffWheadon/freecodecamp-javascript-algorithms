const pairElement = require("../src/dnaPair");

test('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].', () => {
   expect(pairElement("ATCGA")).toMatchObject([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
});
