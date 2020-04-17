const palindrome = function(str) {
  let isPalindrome = true;

  str = str.replace(/[\W_]+/g, '');
  str = str.toLowerCase();

  for (let i = 0, j = str.length - 1; i < j; i++,j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

module.exports = palindrome;