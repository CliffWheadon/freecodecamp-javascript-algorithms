const smallestCommons = function smallestCommons(arr) {
    arr.sort(function(a,b) {
        return a - b;
    });

    let arrMin = arr[0];
    let arrMax = arr[1];

    //fill array
    for (let i = arrMin + 1; i < arrMax; i++) {
        arr.splice(arr.length - 1, 0, i);
    }

    arr.reverse();

    let found = false;
    let testNum = arr[0] + 1;

    while(!found) {
        let valid = true;

        for (let i = 0; i < arr.length; i++) {
            if (testNum % arr[i] !== 0) {
                valid = false;
            }
        }

        if (valid) {
            return testNum;
        }

        testNum++;
    }
};

module.exports = smallestCommons;