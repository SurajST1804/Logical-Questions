// //reverse str wihtout rev method
// var str = "suraj";
// var rev = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// console.log(rev);

// // print *
// var n = 5;
// var string = "";
// for (var i = 0; i < n; i++) {
//   for (var j = 0; j < n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// var obj = [
//   {
//     name: "abc",
//     id: "1",
//   },
//   {
//     name: "abc",
//     id: "1",
//   },
//   {
//     name: "def",
//     id: "3",
//   },
// ];

// var x = JSON.stringify(obj);
// console.log(x);
// var y = [...new Set(obj)];
// console.log(y);
// var x = [...new Set(obj.name)];
// console.log(x);
// var y = (obj[0].age = 23);
// delete obj[0].name;
// console.log(obj);

// for each loop ex
// let ol = document.getElementById("list");

// let foods = ["upma", "rice"];

// foods.forEach((val, ind) => {
//   let li = document.createElement("li");
//   li.innerHTML = `${val}`;
//   ol.appendChild(li);
// });

// var arr = [1, 2, 3, 4, 5, 6];

// var a = arr.splice(2, 1, 6);
// console.log(a);
// console.log(arr);

// var b = arr.slice(2, 5);
// console.log(b);
// console.log(arr);

var obj = [
  {
    name: "abc",
    age: "23",
  },
  {
    name: "abc",
    age: "24",
  },
  {
    name: "xyz",
    age: "25",
  },
];
