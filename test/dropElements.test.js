const dropElements = require('../src/dropElements');

test('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].', () => {
   expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).toMatchObject([3, 4]);
});

test('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', () => {
   expect(dropElements([0, 1, 0, 1], function(n) {return n === 1;})).toMatchObject([1, 0, 1]);
});

test('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].', () => {
   expect(dropElements([1, 2, 3, 4], function(n) {return n > 5;})).toMatchObject([]);
});