function palindrome(str) {
  str=str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  for (var i = 0; i < (str.length / 2); i++) {
      if (str.charAt(i) !== str.charAt((str.length - i) - 1)) {
          return false;
      }
  }
  return true;
}
  
palindrome("eye");  // returns true
palindrome("_eye");  // returns true
palindrome("race car");  // returns true
palindrome("not a palindrome");  // returns false
palindrome("A man, a plan, a canal. Panama");  // returns true
palindrome("never odd or even");  // returns true
palindrome("nope");  // returns false
palindrome("almostomla");  // returns false
palindrome("My age is 0, 0 si ega ym.");  // returns true
palindrome("1 eye for of 1 eye.");  // returns false
palindrome("0_0 (: /-\ :) 0-0");  // returns true