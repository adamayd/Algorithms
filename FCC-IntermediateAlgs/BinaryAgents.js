function binaryAgent(str) {
  const splitArr = str.split(' ');
  let decodeStr = '';
  splitArr.forEach(num => {
    let binArr = num.split('').reverse(),
        adamUp = 0;
    for (var i = 0; i < binArr.length; i++) {
      adamUp += Number(binArr[i]) * Math.pow(2, i);
    }
    decodeStr += String.fromCharCode(adamUp);
  });
  return decodeStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") ;  // returns "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") ;  // returns "I love FreeCodeCamp!"