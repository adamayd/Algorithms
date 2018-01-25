function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);  // returns [3]
slasher([1, 2, 3], 0);  // returns [1, 2, 3]
slasher([1, 2, 3], 9);  // returns []
slasher([1, 2, 3], 4);  // returns []
slasher(["burgers", "fries", "shake"], 1);  // returns ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);  // returns ["cheese", 4]