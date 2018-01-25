function convertToRoman(num) {
  var stringToSplit = num.toString();
  var romanNum = "";
  var splits = stringToSplit.split("");

  for (var i = 0; i < 4 - stringToSplit.length; i++) {
    splits.unshift("");
  }

  switch(splits[0]) {
    case "1":
      romanNum += "M";
      break;
    case "2":
      romanNum += "MM";
      break;
    case "3":
      romanNum += "MMM";
                  }

  switch(splits[1]) {
    case "1":
      romanNum += "C";
      break;
    case "2":
      romanNum += "CC";
      break;
    case "3":
      romanNum += "CCC";
      break;
    case "4":
      romanNum += "CD";
      break;
    case "5":
      romanNum += "D";
      break;
    case "6":
      romanNum += "DC";
      break;
    case "7":
      romanNum += "DCC";
      break;
    case "8":
      romanNum += "DCCC";
      break;
    case "9":
      romanNum += "CM";
      break;
                  }

  switch(splits[2]) {
    case "1":
      romanNum += "X";
      break;
    case "2":
      romanNum += "XX";
      break;
    case "3":
      romanNum += "XXX";
      break;
    case "4":
      romanNum += "XL";
      break;
    case "5":
      romanNum += "L";
      break;
    case "6":
      romanNum += "LX";
      break;
    case "7":
      romanNum += "LXX";
      break;
    case "8":
      romanNum += "LXXX";
      break;
    case "9":
      romanNum += "XC";
      break;
                  }

  switch(splits[3]) {
    case "1":
      romanNum += "I";
      break;
    case "2":
      romanNum += "II";
      break;
    case "3":
      romanNum += "III";
      break;
    case "4":
      romanNum += "IV";
      break;
    case "5":
      romanNum += "V";
      break;
    case "6":
      romanNum += "VI";
      break;
    case "7":
      romanNum += "VII";
      break;
    case "8":
      romanNum += "VIII";
      break;
    case "9":
      romanNum += "IX";
      break;
                  }

  
 return romanNum;
}

convertToRoman(2);  // returns "II"
convertToRoman(3);  // returns "III"
convertToRoman(4);  // returns "IV"
convertToRoman(5);  // returns "V"
convertToRoman(9);  // returns "IX"
convertToRoman(12);  // returns "XII"
convertToRoman(16);  // returns "XVI"
convertToRoman(29);  // returns "XXIX"
convertToRoman(44);  // returns "XLIV"
convertToRoman(45);  // returns "XLV"
convertToRoman(68);  // returns "LXVIII"
convertToRoman(83);  // returns "LXXXIII"
convertToRoman(97);  // returns "XCVII"
convertToRoman(99);  // returns "XCIX"
convertToRoman(500);  // returns "D"
convertToRoman(501);  // returns "DI"
convertToRoman(649);  // returns "DCXLIX"
convertToRoman(798);  // returns "DCCXCVIII"
convertToRoman(891);  // returns "DCCCXCI"
convertToRoman(1000);  // returns "M"
convertToRoman(1004);  // returns "MIV"
convertToRoman(1006);  // returns "MVI"
convertToRoman(1023);  // returns "MXXIII"
convertToRoman(2014);  // returns "MMXIV"
convertToRoman(3999);  // returns "MMMCMXCIX"
