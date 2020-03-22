const truthCheck = require('../src/truthCheck.js');

test('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, ' +
    '{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.', () => {

    expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
        {"user": "Dipsy", "sex": "male"},
        {"user": "Laa-Laa", "sex": "female"},
        {"user": "Po", "sex": "female"}], "sex"))
        .toBe(true);
});

test('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, ' +
    '{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.', () => {

    expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
        {"user": "Dipsy"},
        {"user": "Laa-Laa", "sex": "female"},
        {"user": "Po", "sex": "female"}], "sex"))
        .toBe(false);
})