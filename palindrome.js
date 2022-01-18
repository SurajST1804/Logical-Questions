// 8 palindrome or not
let str = "malayalam";
let rev = str.split("").reverse().join("");
console.log(rev);
if (str == rev) {
  console.log("palindrome");
} else {
  console.log("not plaindrome");
}

let rev1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev1 += str[i];
}
if (str == rev1) {
  console.log("palindrome");
} else {
  console.log("not plaindrome");
}
