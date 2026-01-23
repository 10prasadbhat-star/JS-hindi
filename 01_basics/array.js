let array = [0,1,2,3,4,5];
let arr2 = ["prasad", "Bhat"];
let arr3 = [0,"prasad", 3, 4];

const arr4 = new Array(1,2,3,4);

//array methods
// array.push(6);
// console.log(array);
// array.pop();
// console.log(array);
// array.unshift(9);
// console.log(array);
// array.shift();
// console.log(array);
// console.log(array.includes(0));
// console.log(array.indexOf(3));
// const newArr = array.join();
// console.log(newArr);
// console.log(array);

// let myArr = [0,1,2,3,4,5];
// let myArr1 = myArr.slice(0,3);
// console.log("A" ,myArr);
// console.log(myArr1);

// console.log("B", myArr);
// let myArr2 = myArr.splice(0,3);
// console.log(myArr2);
// console.log("C" ,myArr);

let marvels = ["Prasad", "Bhat", "Shaktimaan"];
let super_hero = ["superman", "spiderman", "hulk"];

// marvels.push(super_hero);
// console.log(marvels); // output [ 'Prasad', 'Bhat', 'Shaktimaan', [ 'superman', 'spiderman', 'hulk' ] ]

let new_hero = marvels.concat(super_hero);
console.log(new_hero); // output [ 'Prasad', 'Bhat', 'Shaktimaan', 'superman', 'spiderman', 'hulk' ]

//spreading method//

let new_spread = [...marvels, ...super_hero];
console.log(new_spread); output [ 'Prasad', 'Bhat', 'Shaktimaan', 'superman', 'spiderman', 'hulk' ]
