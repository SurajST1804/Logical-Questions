// 6 to filter data grater than 5 letters

let arr = ["suraj", "balaji", "gagansurya", "yakshit", "kiranhp"];

let filterdata = arr.filter((val, ind) => {
  if (val.length > 7) {
    return val;
  }
});
console.log(filterdata);
