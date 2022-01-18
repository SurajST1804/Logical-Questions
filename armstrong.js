// 19 armstrong number or not
let sum1 = 0;
let num = parseInt(prompt("Enter number"));
let numofDigit = num.length;
while (num > 0) {
  let rem = num % 10;
  sum1 += rem * numofDigit;
  num = parseInt(num / 10);
}
if (sum1 == num) {
  console.log(`${num} is armstrong`);
} else {
  console.log(`${num} is not armstrong`);
}
