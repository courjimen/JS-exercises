/* Create a function that takes in a number as a **string n and returns the number without trailing and leading zeros. 
- If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0"). If the number is 0, 0.0, 000, 00.00, etc... return "0". **Return a string.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000). 

Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230). 

Examples
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"

*/

/* 
1. function name (typeof n) = string --> remove both trailing and leading 0'
3. use split method to separate #'s --> for loop --> if block to conditions
4. **pop method to remove 0's at the end and shift to remove 0's at the beginning
2. .0 on the end, return the integer value and if the number is 0 = return string --> '0'
*/

function removeLeadingTrailing(n) {
    // let float = parseFloat(n)
    // console.log("float", float)
    // let result = float.toString()
    // console.log("string", result)
    // return result
    
    if(n === "0"){
        return "0"
    }
    return parseFloat(n).toString()
}

console.log(removeLeadingTrailing("0")) //➞ 0

console.log(removeLeadingTrailing("00402")) //➞ "402"

console.log(removeLeadingTrailing("03.1400")) //➞ "3.14"

console.log(removeLeadingTrailing("300")) //➞ "300"

console.log(removeLeadingTrailing('000.0')) // --> "0"