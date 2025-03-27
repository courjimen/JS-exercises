/*
Write a JavaScript function that takes two numbers as input and returns the larger number.
Use the ternary operator (condition? valueIfTrue : valueIfFalse) for this task.
*/
//

function findLargerNumber(x,y) {
if (typeof x !== "number" || typeof y !== "number") {
    return `Invalid input. Please enter a number.`;
}
// condition: return the larger number ? 45 : 38 
const greaterNum = x > y ? x : y
return greaterNum;
}  

// console.log(findLargerNumber(45, 38)); //45
// console.log(findLargerNumber(2, 24)); //24
// console.log(findLargerNumber(45, 45)); //45
console.log(findLargerNumber(45, "hello")); //45