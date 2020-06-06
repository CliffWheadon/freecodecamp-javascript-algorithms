const numeralToRoman = new Map();
numeralToRoman.set(1, 'I');
numeralToRoman.set(2, 'II');
numeralToRoman.set(3, 'III');
numeralToRoman.set(4, 'IV');
numeralToRoman.set(5, 'V');
numeralToRoman.set(6, 'VI');
numeralToRoman.set(7, 'VII');
numeralToRoman.set(8, 'VIII');
numeralToRoman.set(9, 'IX');
numeralToRoman.set(10, 'X');
numeralToRoman.set(20, 'XX');
numeralToRoman.set(30, 'XXX');
numeralToRoman.set(40, 'XL');
numeralToRoman.set(50, 'L');
numeralToRoman.set(60, 'LX');
numeralToRoman.set(70, 'LXX');
numeralToRoman.set(80, 'LXXX');
numeralToRoman.set(90, 'XC');
numeralToRoman.set(100, 'C');
numeralToRoman.set(200, 'CC');
numeralToRoman.set(300, 'CCC');
numeralToRoman.set(400, 'CD');
numeralToRoman.set(500, 'D');
numeralToRoman.set(600, 'DC');
numeralToRoman.set(700, 'DCC');
numeralToRoman.set(800, 'DCCC');
numeralToRoman.set(900, 'CM');
numeralToRoman.set(1000, 'M');
numeralToRoman.set(2000, 'MM');
numeralToRoman.set(3000, 'MMM');

const convertToRoman = function (num) {
  const ones = num % 10;
  const tens = num % 100 - ones;
  const hundreds = num % 1000 - tens - ones;
  const thousands = num % 10000 - hundreds - tens - ones;

  let numberInRomanNumerals = '';

  if (thousands > 0) {
    numberInRomanNumerals += numeralToRoman.get(thousands);
  }

  if (hundreds > 0) {
    numberInRomanNumerals += numeralToRoman.get(hundreds);
  }

  if (tens > 0) {
    numberInRomanNumerals += numeralToRoman.get(tens);
  }

  if (ones > 0) {
    numberInRomanNumerals += numeralToRoman.get(ones);
  }

  return numberInRomanNumerals;
}

module.exports = convertToRoman;