function truthCheck(collection, pre) {
    return collection.every(value => {
        return value[pre];
    });
}

module.exports = truthCheck;