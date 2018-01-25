function translatePigLatin(str) {
  let igpay = '';
  const vowels = (/^[aeiou]/i).test(str);
  if (vowels) {
    igpay = str + 'way';
  } else {
    igpay = (/[aeiou].*/i).exec(str) + (/^[^aeiou]*/i).exec(str) + 'ay';
  }
  return igpay;
}

translatePigLatin("california");  // returns "aliforniacay"
translatePigLatin("paragraphs");  // returns "aragraphspay"
translatePigLatin("glove");  // returns "oveglay"
translatePigLatin("algorithm");  // returns "algorithmway"
translatePigLatin("eight");  // returns "eightway"