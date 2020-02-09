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

test('myReplace("This has a spellngi error", "spellngi", "spelling") should return ' +
    '"This has a spelling error".', () => {

    expect(myReplace("This has a spellingi error", "spellingi", "spelling"))
        .toBe("This has a spelling error");
});
