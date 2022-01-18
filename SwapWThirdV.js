//11 How to Swap two number without using third variable.

function Swap() {
  var a = 10;
  var b = 20;
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
Swap();
