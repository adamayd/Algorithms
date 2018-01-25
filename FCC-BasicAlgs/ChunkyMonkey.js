function chunkArrayInGroups(arr, size) {
  var chunkArr = [];
  for (var i = 0; i < arr.length; i += size) {
    chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);  // returns [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);  // returns [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);  // returns [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);  // returns [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);  // returns [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);  // returns [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);  // returns [[0, 1], [2, 3], [4, 5], [6, 7], [8]]