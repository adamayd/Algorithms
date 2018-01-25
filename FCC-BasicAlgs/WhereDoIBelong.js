function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => {
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 35);  // returns 3
getIndexToIns([10, 20, 30, 40, 50], 30);  // returns 2
getIndexToIns([40, 60], 50);  // returns 1
getIndexToIns([3, 10, 5], 3);  // returns 0
getIndexToIns([5, 3, 20, 3], 5);  // returns 2
getIndexToIns([2, 20, 10], 19);  // returns 2
getIndexToIns([2, 5, 10], 15);  // returns 3