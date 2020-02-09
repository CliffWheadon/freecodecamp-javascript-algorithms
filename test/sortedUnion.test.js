const uniteUnique = require("../src/sortedUnion");

test('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toMatchObject([1, 3, 2, 5, 4]);
});