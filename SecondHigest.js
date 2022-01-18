// 1 in aay find 2nd higest num

let a = [1, 34, 12, 23];

let asc = a.sort((a, b) => {
  return a - b;
});
console.log(a[a.length - 2]);

// without built in
let temp = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
console.log(a[a.length - 2]);
