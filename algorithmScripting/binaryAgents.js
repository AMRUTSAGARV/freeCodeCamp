// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  // using the radix (or base ) parameter in parseInt, we can convert binary to decimal number while simultaneosly converting to char

  for (let j = 0; j < biString.length; j++) {
    uniString.push(String.fromCharCode(parseInt(biString[j], 2)));
  }

  //wwe then simply join the string
  return uniString.join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
