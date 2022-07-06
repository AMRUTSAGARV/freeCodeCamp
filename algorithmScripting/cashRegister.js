var myarray = [
  { mycash: "ONE HUNDRED", val: 100 },
  { mycash: "TWENTY", val: 20 },
  { mycash: "TEN", val: 10 },
  { mycash: "FIVE", val: 5 },
  { mycash: "ONE", val: 1 },
  { mycash: "QUARTER", val: 0.25 },
  { mycash: "DIME", val: 0.1 },
  { mycash: "NICKEL", val: 0.05 },
  { mycash: "PENNY", val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;
  var register = cid.reduce(
    function (acc, curre) {
      acc.total += curre[1];
      acc[curre[0]] = curre[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  var change_arr = myarray.reduce(function (acc, curre) {
    var value = 0;
    while (register[curre.mycash] > 0 && change >= curre.val) {
      change -= curre.val;
      register[curre.mycash] -= curre.val;
      value += curre.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curre.mycash, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}
