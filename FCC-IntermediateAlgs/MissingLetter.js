function fearNotLetter(str) {
  var missing;
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) !== (str.charCodeAt(i + 1) - 1)) {
      missing = String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return missing;
}

fearNotLetter("abce");  // returns "d"
fearNotLetter("abcdefghjklmno");  // returns "i"
fearNotLetter("bcd");  // returns undefined
fearNotLetter("yz");  // returns undefined