function sumFibs(num) {
  var fibNum = 1,
      oddNum = 0,
      i = 1;
  do {
    if (fibNum % 2) oddNum += fibNum;
    if (i % 2) oddNum += i;
    fibNum += i;
    i += fibNum;
  } while (i <= num);
  if (num % 2 && num === fibNum) oddNum += fibNum;
  return oddNum;
}

sumFibs(1);  // returns a number
sumFibs(1000);  // returns 1785
sumFibs(4000000);  // returns 4613732
sumFibs(4);  // returns 5
sumFibs(75024);  // returns 60696
sumFibs(75025);  // returns 135721