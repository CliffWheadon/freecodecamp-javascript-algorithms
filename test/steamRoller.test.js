const steamrollArray = require('../src/steamRoller');

test('steamrollArray([1, [2, 3]] should return [1, 2, 3]).', () => {
   expect(steamrollArray([1, [2, 3]])).toMatchObject([1, 2, 3]);
});

test('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', () => {
    expect(steamrollArray([[["a"]], [["b"]]])).toMatchObject(["a", "b"]);
});

test('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toMatchObject([1, 2, 3, 4]);
});

test('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].', () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toMatchObject([1, 3, 4]);
});

test('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toMatchObject([1, {}, 3, 4]);
})