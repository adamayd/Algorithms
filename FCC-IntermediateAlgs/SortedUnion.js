function uniteUnique(arr) {
  var flattenedArr = Array.from(arguments).reduce((a, b) => {
    return a.concat(b);
  });
  var sortedArr = flattenedArr.reduce((acc, cur) => {
    if (acc.length === 0 || !(acc.includes(cur))) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return sortedArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);  // returns [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);  // returns [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]);  // returns [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);  // returns [1, 2, 3, 5, 4, 6, 7, 8]
