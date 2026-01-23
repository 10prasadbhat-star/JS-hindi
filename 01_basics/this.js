//Defination: It refers to the current object inside which the function is called.

// //scenario 1 : in the browser directly run console.log 
// console.log(this);// output will windows object but in node.js output will be {}

// //scenario 2: calling inside a function 

// function myName() {
//     let name = "Prasad"
//     console.log(this.name);//undefined
//     console.log(this)  // global object and in browser it is windows
// }
// myName();

// let myFullname = function () {
//     let name = "Prasad Bhat"
//     console.log(this.name); //undefined
//     console.log(this) // global object and in browser it is windows
// }
// myFullname();

//scenario 3 : calling a function inside a defined object
// let obj1 = {
//     name: "Prasad",
//     age: 35,
//     array: ["Prasad", "Bhat", "Yojana"],
//     readName: function () {
//         console.log(this);
//         console.log(`my name is ${this.name}`);
//     },
//     obj2: {
//         name: "Bhat",
//         age: 35,
//         readMyname: function () {
//             console.log(this.array)
//         }
//     }

// }

// obj1.readName(); // output is "my name is Prasad", here this is obj1
// obj1.obj2.readMyname(); //output is undefined because array is in obj1 and not in obj2, here current object is obj2

//scenario 4: construtor function similar to class

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){
//         // console.log(`${this.firstName } ${this.lastName}`);
//         console.log(this);
//     }
// }

// let Person1 = new Person ("Prasad", "Bhat");

// Person1.getFullName();

let obj = {
    name: "bhat",
    checkMyname: function () {
        console.log(this.name);

        function test() {
            let name = "Prasad"
            console.log(this);
        }
       test();
       console.log(window.name);
    }
}

obj.checkMyname();

