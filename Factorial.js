// 2 factorial of given number

function Factorize(n) {
  var fact = 1;
  while (n > 1) {
    fact = fact * n;
    n--;
  }
  //   return fact;
  console.log(fact);
}
Factorize(6);
