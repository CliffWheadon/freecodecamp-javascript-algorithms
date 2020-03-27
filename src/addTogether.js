function addTogether() {
    if (arguments.length === 2 && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1 && Number.isInteger(arguments[0])) {
        const y = arguments[0];
        return function (x) {
            if (Number.isInteger(x)) {
                return y + x;
            }
            return undefined;
        }
    }
    return undefined;
}

module.exports = addTogether;