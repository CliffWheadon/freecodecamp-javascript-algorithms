const denominationValues = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

const checkCashRegister = function (price, cash, cid) {
  let changeDue = cash * 100 - price * 100;
  let change = [];
  const cashInDrawer = cid.reduce((accumulator, currentValue) => accumulator + currentValue[1] * 100, 0);

  if (changeDue > cashInDrawer) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if (changeDue === cashInDrawer) {
    return {status: "CLOSED", change: cid};
  }

  cid.reverse().forEach((denomination) => {
    let denominationKey = denomination[0];
    let moneyLeft = denomination[1] * 100;
    const denominationValue = denominationValues[denominationKey];

    if (moneyLeft > 0 && changeDue >= denominationValue) {
      let changeForDenomination = 0;

      while (moneyLeft > 0 && changeDue > 0 && changeDue >= denominationValue) {
        changeForDenomination += denominationValue;
        moneyLeft -= denominationValue;
        changeDue -= denominationValue;
      }

      change.push([denominationKey, changeForDenomination / 100.0]);
    }
  });

  if (changeDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: change};
}

module.exports = checkCashRegister;
