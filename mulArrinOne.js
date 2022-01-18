//13 combine multiple into one array
let x = ["java"];
let y = ["java"];
let z = ["java"];

let combinearray = x.concat(y, z);
console.log(combinearray);

// combine with spread operator
let combineWithSpread = [...x, ...y, ...z];
console.log(combineWithSpread);
