function sumPrimes(num) {
  var primes = [];
  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= num; j++) {
      var result = i % j;
      if (!result && i !== j) {
        break;
      }
      if (j == num) primes.push(i);
    }
  }
  return primes.reduce((acc, cur) => acc + cur);
}

sumPrimes(10);  // returns a number
sumPrimes(10);  // returns 17
sumPrimes(977);  // returns 73156