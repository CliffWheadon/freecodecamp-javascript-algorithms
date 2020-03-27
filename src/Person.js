const Person = function (firstAndLast) {

    let nameParts = firstAndLast.split(" ");

    this.getFirstName = function() {
        return nameParts[0];
    }

    this.getLastName = function () {
        return nameParts[1];
    };

    this.getFullName = function () {
        return nameParts[0] + " " + nameParts[1];
    };

    this.setFirstName = function(first) {
        nameParts[0] = first;
    }

    this.setLastName = function (last) {
        nameParts[1] = last;
    }

    this.setFullName = function(firstAndLast) {
        nameParts = firstAndLast.split(" ");
    }

    return this;
};

module.exports = Person;