function findLongestWord(str) {
  var arr = str.split(' ');
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");  // returns 6
findLongestWord("May the force be with you");  // returns 5
findLongestWord("Google do a barrel roll");  // returns 6
findLongestWord("What is the average airspeed velocity of an unladen swallow");  // returns 8
findLongestWord("What if we try a super-long word such as otorhinolaryngology");  // returns 19