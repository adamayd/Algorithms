function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);  // returns false
mutation(["hello", "Hello"]);  // returns true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);  // returns true
mutation(["Mary", "Army"]);  // returns true
mutation(["Mary", "Aarmy"]);  // returns true
mutation(["Alien", "line"]);  // returns true
mutation(["floor", "for"]);  // returns true
mutation(["hello", "neo"]);  // returns false
mutation(["voodoo", "no"]);  // returns false