// 9 program to count total number of words in a string?

let str = "suraj";
let count = 1;
for (var i = 0; i < str.length - 1; i++) {
  if ((str[i] = " ")) {
    count++;
  }
}
console.log(count);

// 2nd method

let a = str.split("");
let b = a.length;
console.log(b);

var c = str.length;
console.log(c);
