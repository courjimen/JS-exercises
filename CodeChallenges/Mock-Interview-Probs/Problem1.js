/* Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
*/

// convert the num to string --> iterate with for loop --> return total number (if 0 return -1)
function numToString (num) {
    const strNum = num.toString()
    for (i=0; i<strNum.length; i++) {
        return strNum[i + 1]
    }
}


console.log(numToString(1000)) // Expect: 4
// console.log(numToString(12)) // Expect: 2
// console.log(numToString(1305981031)) // Expect: 10
// console.log(numToString(0)) // Expect: -1