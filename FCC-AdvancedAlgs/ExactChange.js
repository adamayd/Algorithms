//  **** NON WORKING -- IN PROGRESS ****
function checkCashRegister(price, cash, cid) {
  let change = cid.reduce((acc, cur) => {
//     acc = cur[1];
    return acc += cur[1];
  })

  let otherObj = cid.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc
  }, {})

  console.log(otherObj);
  console.log(change);

  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);