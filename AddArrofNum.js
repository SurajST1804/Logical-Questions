// 3 sum of array of number

var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (let val of arr) {
  sum += val;
}
console.log(sum);

//using reduce method
let b = arr.reduce((total, value) => {
  return total + value;
});
console.log(b);
