function myReplace(str, before, after) {
  str = str.replace(before, function() {
    if (before.charAt(0) === before.charAt(0).toLowerCase()) {
      after = after.replace(after.charAt(0), after.charAt(0).toLowerCase());
    }
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
      after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
    }
    return after;
  });
  
  // TODO: Try to solve with a RegEx
  return str;
}

myReplace("Let us go to the store", "store", "mall");  // returns "Let us go to the mall"
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");  // returns "He is Sitting on the couch"
myReplace("This has a spellngi error", "spellngi", "spelling");  // returns "This has a spelling error"
myReplace("His name is Tom", "Tom", "john");  // returns "His name is John"
myReplace("Let us get back to more Coding", "Coding", "algorithms");  // returns "Let us get back to more Algorithms"
