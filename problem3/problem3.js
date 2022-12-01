function primaSegiEmpat(wide, high, start) {
  let primes = [],
    checks = start + 1;

  while (primes.length < 2 * wide * high) {
    let stat = "prime";
    for (i = 2; i <= Math.sqrt(checks); i++) {
      if (checks % i == 0) {
        stat = "not prime";
      }
    }
    if (stat == "prime") {
      primes.push(checks);
      if (wide % 2 == 0) {
        if ((primes.length + 1) % (2 * wide) == 0) {
          primes.push("\n");
        } else {
          primes.push(" ");
        }
      } else {
        if ((primes.length + 1) % wide == 0) {
          primes.push("\n");
        } else {
          primes.push(" ");
        }
      }
    }
    checks++;
  }
  let sum = primes
    .filter((val) => {
      if (typeof val === "number") {
        return val;
      }
    })
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  primes.push(sum);

  return primes.join("");
}

console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/
console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/
