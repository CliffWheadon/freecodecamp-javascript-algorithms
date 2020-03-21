const dropElements = function(arr, func) {
    while (!func(arr[0]) && arr.length > 0) {
        arr.shift();
    }

    return arr;
};

module.exports = dropElements;