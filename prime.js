// 5 prime number

function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
// prime(5);
console.log(prime(11));
