function largestOfFour(arr) {
  var largestArr = [];
  arr.forEach(testArr => {
    testArr.sort((a, b) => {
      return b - a;
    });
    largestArr.push(testArr[0]);
  });
  return largestArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  // returns [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);  // returns [9, 35, 97, 1000000]