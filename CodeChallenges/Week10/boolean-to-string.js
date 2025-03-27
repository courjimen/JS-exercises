/*
Implement a function which will convert the given boolean value into its string representation.

Example:				Example:
Input: boolean false    Input: boolean true
Output: "false"			Output: “true”

*/
5 == "5" // true
true == "true" // true
true === "true"  // false
/*function booleanString (value) {
// find out if the thing passed into the func is a boolean
    let inp = typeof value // 
// if it's not 
  // we're done 
  // return "please pass in a true or false"
// if it is
    return use toString()
    
}*/

// function booleanString (value) { 
//     if (typeof value === "boolean") { // "number" 
//         return value.toString();
//     } else {
//         return "please pass in a true or false";
//     }
// }

//TERNARY METHOD
// function booleanString (value) {
//     return typeof value === "boolean" ? value.toString() : "please pass in a true or false";
// }

//ES6 (NEWER FORMAT => )
const bToS = (value) => typeof value === "boolean" ? value.toString() : "please pass in a true or false";

console.log(booleanString(true))
console.log(booleanString("true"))
console.log(booleanString(false))
