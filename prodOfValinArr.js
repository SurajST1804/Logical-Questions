// 18 find product of value present in arr which is divisible by both 2 and 3

var arr1 = [1, 2, 3, 6, 9, 12];
var prod = 1;
let y = arr1.forEach((val, ind) => {
  if (val % 2 == 0 && val % 3 == 0) {
    prod *= val;
  }
});
console.log(prod);
