const rot13 = function(str) {
  const ASCII_A = 65;
  const ASCII_Z = 90;

  const chars = str.split('');

  return chars.map((char) => {
    const charAscii = char.charCodeAt(0);

    if (charAscii < ASCII_A || charAscii > ASCII_Z) {
      return char;
    }

    if (charAscii + 13 > ASCII_Z) {
      const newAscii = ASCII_A + charAscii + 12 - ASCII_Z;

      return String.fromCharCode(newAscii);
    }

    return String.fromCharCode(charAscii + 13)
  }).join('');
}

module.exports = rot13;
