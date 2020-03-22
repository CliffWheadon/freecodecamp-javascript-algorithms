function binaryAgent(str) {
    return str.split(" ").map(binaryString => {
        return String.fromCharCode(parseInt(binaryString,2));
    }).join("");
}

module.exports = binaryAgent;