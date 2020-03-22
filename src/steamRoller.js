const steamrollArray = function(arr) {
    let toReturn = [];

    arr.forEach((value) => {
        if (Array.isArray(value)) {
            toReturn = toReturn.concat(steamrollArray(value));
        } else {
            toReturn.push(value);
        }
    });

    return toReturn;
};

module.exports = steamrollArray;