//15  Create one object.Add one property to that object.

// 1. way

var a = {
  name: "suraj",
};
a.age = 26;
console.log(a);

// 2nd way

var b = {
  name: "suraj",
};
Object.defineProperties(b, {
  age: {
    value: 20,
  },
});
console.log(b);
