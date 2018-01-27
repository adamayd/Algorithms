function addTogether() {
  var numArr = Array.from(arguments);
  if (numArr.some(num => typeof(num) !== 'number')) return;
  if (arguments[1]) return arguments[0] + arguments[1];
  function missingSum(otherNum) {
    if (typeof(otherNum) !== 'number') return;
    return numArr[0] + otherNum;
  }
  return missingSum;
}

addTogether(2, 3) ;  // returns 5
addTogether(2)(3) ;  // returns 5
addTogether("http://bit.ly/IqT6zt") ;  // returns undefined
addTogether(2, "3") ;  // returns undefined
addTogether(2)([3]) ;  // returns undefined