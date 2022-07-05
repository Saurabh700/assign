let arr = [1, 2, 3, 4, 5];

let map = arr.map((el) => el * 2);

let filter = arr.filter((el) => el % 2 == 0);

let sum = arr.reduce((acc, c) => acc + c, 0);

console.log(arr);
console.log(map);
console.log(filter);
console.log(sum);
