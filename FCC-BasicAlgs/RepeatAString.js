function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  var repeatStr = '';
  for (var i = 0; i < num; i++) {
    repeatStr += str;
  }
  // return str.repeat(num);  
  return repeatStr;
}

repeatStringNumTimes("*", 3);  // returns "***"
repeatStringNumTimes("abc", 3);  // returns "abcabcabc"
repeatStringNumTimes("abc", 4);  // returns "abcabcabcabc"
repeatStringNumTimes("abc", 1);  // returns "abc"
repeatStringNumTimes("*", 8);  // returns "********"
repeatStringNumTimes("abc", -2);  // returns ""
// since the description didn't mention .repeat I guessed not to use it for the solution but the solution using .repeat is present and commented out