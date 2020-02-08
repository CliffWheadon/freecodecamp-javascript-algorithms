const myReplace = require('../src/myReplace');

test('myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"', () => {
    expect(myReplace("Let us go to the store", "store", "mall"))
        .toBe("Let us go to the mall");
});

test('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") ' +
    'should return "He is Sitting on the couch".', () => {

    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
        .toBe("He is Sitting on the couch");
});