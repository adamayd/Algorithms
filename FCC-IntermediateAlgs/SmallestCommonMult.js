function smallestCommons(arr) {
  var testValue = 0;
  arr.sort();
  for (var i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    arr.splice(-1, 0, i);
  }
  for (i = arr[arr.length -1] + 1; i !== 0; i++) {
    testValue = arr[arr.length - 1] * i;
    if (arr.every(num => testValue % num === 0)) {
      console.log(testValue);
      return testValue;
    }
  }
}

smallestCommons([1, 5]);  // returns a number
smallestCommons([1, 5]);  // returns 60
smallestCommons([5, 1]);  // returns 60
smallestCommons([1, 13]);  // returns 360360
smallestCommons([23, 18]);  // returns 6056820