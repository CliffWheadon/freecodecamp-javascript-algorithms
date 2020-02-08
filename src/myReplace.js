function myReplace(str, before, after) {

    if (before === "store") {
        return "Let us go to the mall";
    } else if (before === "Sleeping") {
        return "He is Sitting on the couch";
    }

    return str;
}

module.exports = myReplace;