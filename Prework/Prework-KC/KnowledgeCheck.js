// Basic JavaScript Practice
// [Problem 1] - Convert Inches to Meters
// Define a function called metersToInches that takes an input of the number
// of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.
function metersToInches (x) {
   return x * 39.3701
}
console.log(metersToInches(15.6));

// [Problem 2] - Loop n Times
// Write a function named loopThrough that takes an argument that is 
// a number and loops through and prints a message “Hello World” that number of times.

// Bonus: After each "Hello world" exept the last add a comma. 
// Example loopThrough(3) = Hello world, Hello world, Hello world
function loopThrough(number) {
    for (let i =0; i < number; i++) {
      console.log("Hello world,");
    }
}
console.log(loopThrough(3));

// [Problem 3] - Even or Odd
// Create a function that accepts an integer and checks if it's even or odd.
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOrOdd(3));
console.log(evenOrOdd(16));

// [Problem 4] - Working with Objects
// Create an object called Person which has the name of a person as a string, and their 
// age as a number. The Person object should have a method called describe which returns 
// a string with the following syntax: "name, age years old". So for example, if John is 
// 19 years old then the function describe of his object will return "John, 19 years old".

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.describe = function(){
        console.log(`${this.name}, ${this.age} years old`);
    }
}
const boy = new Person("John", 19);
    boy.describe();

// [Problem 5] - Math.random
// Review the Math.random fuction here and write a function with an if statement that console.log's 
// "Over 1.5" if Math.random returns a number greater than 1.5 Otherwise console.log "Under 1.5".
function randoNum(max) {
let x = Math.floor(Math.random() * max);
    if (x > 1.5) {
        console.log("Over 1.5");
    } else {
        console.log("Under 1.5");
    }
}
console.log(randoNum(7));

// [Problem 6] - Splice method
// In the examples below, use splice to convert the first array to the second array:

const myArr = [2,3,4,5];
myArr.splice(1, 1);
console.log(myArr);

const myArr2 = ["alpha", "gamma", "delta"];
myArr2.splice(1, 0, "beta");
console.log(myArr2);

const myArr3 = [10,-10,-5,-3,2,1];
myArr3.splice(1, 5, 9,8,7,6,5,4,3,2,1);
console.log(myArr3);

//wanted to try and loop through the numbers within the splice method instead of replacing them
//all individually.

// [Problem 7] - While Loops
// Write a function with a while loop that prints the multiples of 5 from 5 to 50 inclusive
let x=5;
while (x <= 45) { //why doesn't x<=50 work? it includes 55...
    console.log(x)
    x+=5;
} console.log(x);

// [Problem 8] - String Manipulation
// Write a function that takes a string as a parameter and convert it from camelCase to Title Case

function toTitleCase(str) {
    const words = str.split(/(?=[A-Z])/);
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
const str = " ";
const result = toTitleCase(str);

console.log(toTitleCase("countToTen"));

//ASK LISA about easier way to work this one.