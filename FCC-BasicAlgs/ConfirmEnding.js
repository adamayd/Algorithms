function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, target.length) === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");  // returns true.
confirmEnding("Connor", "n");  // returns false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");  // returns false.
confirmEnding("He has to give me a new name", "name");  // returns true.
confirmEnding("Open sesame", "same");  // returns true.
confirmEnding("Open sesame", "pen");  // returns false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");  // returns false.
// Do not use the built-in method .endsWith() to solve the challenge.