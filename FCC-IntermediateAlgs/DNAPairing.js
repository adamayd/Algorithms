function pairElement(str) {
  var newArr = str.split('');
  newArr.forEach((item, i, arr) => {
    if (item == 'A' || item == 'T') {
      arr[i] = (item == 'A' ? ['A', 'T'] : ['T', 'A']);
    } else {
      arr[i] = (item == 'G' ? ['G', 'C'] : ['C', 'G']);
    }
  });
  console.log(newArr);
  return str;
}

pairElement("ATCGA");  // returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG");  // returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA");  // returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]