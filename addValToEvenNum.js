// 16 prog to add value 5 to even elements in arr and 2 to odd elements

var arr = [1, 2, 3, 4, 5, 6];

let add = arr.filter((val, ind) => {
  if (val % 2 == 0) {
    console.log(val + 5);
  } else {
    console.log(val + 2);
  }
});

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i] + 5);
//   } else {
//     console.log(arr[i] + 2);
//   }
// }
