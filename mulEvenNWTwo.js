// 7 multiply even number with 2

let arr1 = [1, 2, 12, 4, 5, 6];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    arr1[i] *= 2;
  }
}
console.log(arr1);
