function steamrollArray(arr) {
  let rolledArr = [],
      nestedArr = [];  
  do {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        nestedArr.push(item);
      } else {
        rolledArr.push(item);
      }
    });
    if (Array.isArray(nestedArr[0])) {
      arr = nestedArr.reduce((a, b) => a.concat(b));
    }
    nestedArr = [];
  } while (arr.some(a => Array.isArray(a)));
  console.log(rolledArr.concat(arr));
  return rolledArr.concat(arr);  
}

//  This one proved to be a bit hard for me so I decided to keep the testing section 
//  which actually fails the array with the object.  That is due to the testing procedure, 
//  not the actual code.  I need to expand the testing to be able to compare an object.

tests = [
  [[["a"]], [["b"]]],
  [1, [2], [3, [[4]]]],
  [1, [], [3, [[4]]]],
  [1, {}, [3, [[4]]]]
];

results = [
  ["a", "b"],
  [1, 2, 3, 4],
  [1, 3, 4],
  [1, {}, 3, 4]
];

let result;

tests.forEach((test, idx) => {
  result = steamrollArray(test);
  if (result.every((rslt, indx) => rslt === results[idx][indx])) {
    console.log('Passed');
  } else {
    console.log('Failed');
  }
});