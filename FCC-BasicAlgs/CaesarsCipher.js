function rot13(str) { 
  var cipher = '';
  for (var i = 0; i < str.length; i++ ) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
      cipher += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      cipher += String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      cipher += str.charAt(i);
    }
  }
  return cipher;
}

rot13("SERR PBQR PNZC");  // returns "FREE CODE CAMP"
rot13("SERR CVMMN!");  // returns "FREE PIZZA!"
rot13("SERR YBIR?");  // returns "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");  // returns "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
rot13("LBH QVQ VG!");  // returns "YOU DID IT!"