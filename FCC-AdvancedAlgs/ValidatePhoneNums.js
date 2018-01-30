
function telephoneCheck(str) {
  var phoneNum = str.match(/\d/g).join('');
  if (phoneNum.length == 11 && phoneNum.charAt(0) !== '1') {
    console.log('country code failed');
    return false;
  }
  if (phoneNum.length > 11) return false;
  console.log(phoneNum);
  var re = /1?\s?(\(\d\d\d\)|\d\d\d)\s?-?\d\d\d\-?\d\d\d\d/;
  console.log(str.match(re) ? true : false);
  return str.match(re) ? true : false;
}

// telephoneCheck("555-555-5555");
// telephoneCheck("1 555 555 5555")
// telephoneCheck("(555-555-5555")
telephoneCheck("-1 (757) 622-7382")