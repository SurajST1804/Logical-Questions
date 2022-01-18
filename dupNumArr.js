// 4 remove duplicate numbers from arr

var arr = [1, 2, 3, 4, 1, 2, 4, 7, 8];

let filterdata = arr.filter((val, ind) => {
  if (arr.indexOf(val) == ind) {
    return val;
  }
});
console.log(filterdata);

// //using set
let c = [...new Set(arr)];
// let c = new Set(arr);
console.log(c);
