function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const frontRemoved = alphabet.splice(alphabet.indexOf(str.charAt(0)));
    const tailRemoved = frontRemoved.slice(0, frontRemoved.indexOf(str.charAt(str.length - 1)));

    const missingLetter = tailRemoved.filter(letter => {
        return !str.split('').includes(letter);
    }).join();

    return missingLetter === "" ? undefined : missingLetter;
}

module.exports = fearNotLetter;