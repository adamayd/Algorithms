function destroyer(arr) {
  var seekArr = Array.from(arguments).splice(1),
      destroyArr = arguments[0];
  seekArr.forEach(seeker => {
    destroyArr = destroyArr.filter(destroyer => {
      return destroyer !== seeker;
    });
  });
  return destroyArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);  // returns [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);  // returns [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);  // returns [1]
destroyer([2, 3, 2, 3], 2, 3);  // returns []
destroyer(["tree", "hamburger", 53], "tree", 53);  // returns ["hamburger"]