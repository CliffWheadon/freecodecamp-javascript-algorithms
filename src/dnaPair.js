function pairElement(str) {
    return str.split('').map(base => {
        return [base, pairBase(base)];
    });
}

function pairBase(base) {
    switch(base) {
        case "A":
            return "T";
        case "T":
            return "A";
        case "C":
            return "G";
        case "G":
            return "C";
    }
}

module.exports = pairElement;