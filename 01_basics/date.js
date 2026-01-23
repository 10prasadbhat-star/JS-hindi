//date is calculated from january 1, 1970
let my_Date = new Date;
console.log(my_Date); // output 2026-01-23T11:45:38.350Z

console.log(my_Date.toString()); //Fri Jan 23 2026 11:48:07 GMT+0000 
console.log(my_Date.toDateString());// Fri Jan 23 2026
console.log(my_Date.toISOString());
console.log(my_Date.toJSON());
console.log(my_Date.toLocaleDateString());
console.log(my_Date.toLocaleString());
console.log(my_Date.toLocaleTimeString());