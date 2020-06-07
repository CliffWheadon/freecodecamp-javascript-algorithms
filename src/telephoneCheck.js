const telephoneCheck = function(str) {
  const telephoneNumberRegex = /^(1 ?)?(((\(\d{3}\))|(\d{3}))[ -]?)+\d{3}[ -]?\d{4}$/;

  return telephoneNumberRegex.test(str);
}

module.exports = telephoneCheck;
