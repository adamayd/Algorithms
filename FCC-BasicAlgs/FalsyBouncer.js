function bouncer(arr) {
  return arr.filter(item => {
    return (item);
  });
}

bouncer([7, "ate", "", false, 9]);  // returns [7, "ate", 9]
bouncer(["a", "b", "c"]);  // returns ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]);  // returns []
bouncer([1, null, NaN, 2, undefined]);  // returns [1, 2]