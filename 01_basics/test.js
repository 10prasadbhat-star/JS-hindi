// console.log("Prasad");
// const accountID = 123455;
// let accountName = "Prasad";
// var accountPassword = "123456";
// accountState = "121212";


// accountName = "Bhat";
// console.table([accountID,accountName,accountPassword,accountState]);
// console.log(typeof null);

// let score = null;
// console.log(typeof score);
// console.log(typeof (score));
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let inputValue = "Prasad";
// let booleanValue = Boolean(inputValue);
// console.log(booleanValue);

//operations//
// console.log(1 + 2 + "2"); //output 32
// console.log(+true);

// let x = 3;
// let y = x++;
// console.log(y);
// console.log(x);
// let z = --x;
// console.log(z);
// console.log(x);
// let a = 4;
// console.log(`${a++ + --a + a++}`);

//converstion to number //
// let numValue = "100";
// console.log(typeof numValue);
// let inputValue = Number(numValue);
// console.log(typeof inputValue);

// let stringValue = "100abc";
// console.log(typeof stringValue);
// let newValue = Number(stringValue);
// console.log(typeof newValue);
// console.log(newValue);

// let score = null;
// console.log(typeof score);//output is object
// let newScore = Number(score);
// console.log(newScore);// output is 0
// console.log(typeof newScore); //output is number

// let undefinedValue = undefined;
// console.log(typeof undefinedValue);
// let newUndefined = Number(undefinedValue);
// console.log(typeof newUndefined);

// let num = "";
// let numConversion = Boolean(num);
// console.log(numConversion);

// console.log("2" === 2);
// console.log("2" + 2 + 2); //output 222
// console.log("20" + 20 - "20"); //output 2000
// console.log(20 + 20 + "20"); // output 4020


// let spaceOne = "Prasad Bhat";
// let spaceTwo = spaceOne;

// spaceTwo = "something else";

// console.log(spaceOne);
// console.log(spaceTwo);


//strings//

let myName = "Prasad";
let myNewName = new String ("Prasad-Bhat"); // prints as object [String: 'Prasad-Bhat']
console.log(myName);
console.log(typeof myNewName);

//split
let sentence = "My name is prasad";
let newSentence = sentence.split(" ", 2);// splits the sentence with delimiter and limits to number of words you need in a new array
console.log(newSentence); // output newSentence = ['My','name']

//trim
let myNName = "   prasad  ";
let trimName = myNName.trim();
console.log(trimName);

