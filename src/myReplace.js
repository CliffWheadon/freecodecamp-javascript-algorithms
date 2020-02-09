function myReplace(str, before, after) {
    const beforeRegex = new RegExp(before, "i");

    return str.split(" ").map(word => {
        if (word.match(beforeRegex)) {
            const firstLetter = word.slice(0,1);
            const afterFirstLetter = after.slice(0,1);

            return firstLetter === firstLetter.toUpperCase()
                ? afterFirstLetter.toUpperCase().concat(after.slice(1))
                : afterFirstLetter.toLowerCase().concat(after.slice(1));
        }

        return word;
    }).join(" ");
}

module.exports = myReplace;