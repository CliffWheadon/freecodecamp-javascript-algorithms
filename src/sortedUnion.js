function uniteUnique(arr) {
    for (let i = 1; i < arguments.length; i++) {
        arr = arr.concat(arguments[i].filter(entry => {
            return !arr.includes(entry);
        }))
    }

    return arr;
}

module.exports = uniteUnique;