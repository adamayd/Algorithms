function sumAll(arr) {
  var numArr = [],
      sumNum = 0;
  numArr.push(Math.min(arr[0], arr[1]));
  for (var i = (numArr[0] + 1); i <= Math.max(arr[0], arr[1]); i++) {
    numArr.push(i);
  }
  sumNum = numArr.reduce(function(acc, cur) {
    return acc + cur;
  });
  
  return sumNum;
}

sumAll([1, 4]);  // returns a number
sumAll([1, 4]);  // returns 10
sumAll([4, 1]);  // returns 10
sumAll([5, 10]);  // returns 45
sumAll([10, 5]);  // returns 45