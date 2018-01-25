function factorialize(num) {
  var factorNum = 1;
  for (var i = 1; i <= num; i++) {
    factorNum *= i;
  } 
  return factorNum;
}
  
factorialize(5);  // returns 120
factorialize(10);  // returns 3628800
factorialize(20);  // returns 2432902008176640000
factorialize(0);  // returns 1