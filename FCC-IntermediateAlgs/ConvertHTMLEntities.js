function convertHTML(str) {
  return str.split('').map(strng => {
    switch (strng) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
    }
    return strng;
  }).join('');
}

convertHTML("Dolce & Gabbana");  // returns Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos");  // returns Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve");  // returns Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"');  // returns Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List");  // returns Shindler&​apos;s List
convertHTML("<>");  // returns &​lt;&​gt;
convertHTML("abc");  // returns abc