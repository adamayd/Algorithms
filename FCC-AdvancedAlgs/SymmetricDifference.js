function sym(args) {
  args = Array.from(arguments);
  var symArr = [];
  for (var i = 0; i < args.length - 1; i++) {
    for (var j =0; j < args[i].length; j++) {
      if (args[i + 1].indexOf(args[i][j]) == -1) {
        console.log('pushing ' + args[i][j]);
        symArr.push(args[i][j]);
      }
    }
  }
//   var newArr = args[1].concat(args[2]);
  console.log(symArr);
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);