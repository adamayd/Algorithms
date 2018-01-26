function dropElements(arr, func) {
  return (arr.findIndex(func) === -1) ? [] : arr.slice(arr.findIndex(func));
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) ;  // returns [3, 4]
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) ;  // returns [1, 0, 1]
dropElements([1, 2, 3], function(n) {return n > 0;}) ;  // returns [1, 2, 3]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) ;  // returns []
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) ;  // returns [7, 4]
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) ;  // returns [3, 9, 2]