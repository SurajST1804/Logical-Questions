// 17 find summation of odd ele in arr

var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;
var x = arr.forEach((value, index) => {
  if (value % 2 !== 0) {
    sum += value;
  }
});
console.log(sum);
