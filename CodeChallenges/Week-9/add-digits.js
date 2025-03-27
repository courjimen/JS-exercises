/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:						Example 2:
Input: num = 38				Input: num = 0
Output: 2						  Output: 0
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

function (65) {
6 + 5 = 11
1 + 1  = 2
}
return 2


1. if () {
convert into string to split '14' -> '1','4' (parseInt)
2. turn it back into a num => add (find sum)
3.  sum  > 9 
} else return single digit 


Challenge: Could you do it without any loop/recursion in O(1) runtime?

*/
// 9 -> "9"
function convertNumToString(num) {
    return num.toString();
}

function getNumLength(num) {
    return convertNumToString(num).length;
}
/// [1,2,3] -> 6
function addNum(numArr) {
    return numArr.reduce((a, b) => a + b, 0);
}
// "123" -> ["1","2","3"];
function splitNum(str) {
    return str.split("");
}

//["1", "2", "3"] -> [1, 2, 3];
function arrNum(arr) {
    return arr.map((str) => parseInt(str, 10));
}
// console.log(arrNum(["1", "2", "3"]));

// function addDigits(num) { // 234
//     let numAsStr = convertNumToString(num); // "234"
    
//     let numLength = getNumLength(numAsStr); // 3
//     let digit = num; // 234

//     while (numLength !== 1) { // true

//         numAsStr = convertNumToString(digit); // "2345"
//         const strArr = splitNum(numAsStr); // ["2", "3", "4", "5"]
//         const numArr = arrNum(strArr); // [2,3,4,5]
//         let sum = addNum(numArr); // 14 
//         numLength = getNumLength(sum); // 2
//         console.log(numLength)
//         if (numLength === 1) {
//            return sum;
//         }
//     }
// }

const addDigits = (num) => { // 234
    let numAsStr = convertNumToString(num); // "234"
    let length = getNumLength(num); // 3
    let digit = num; // 234
    while(length !== 1) { // true
        numAsStr = convertNumToString(digit); // "234"
        // get the array of digits
        const strArr = splitNum(numAsStr); // ["2","3","4"]
        const numArr = arrNum(strArr); // [2,3,4]
        const sum = addNum(numArr); // 9
        length = getNumLength(sum); // 1
        digit = sum;
    }
    return digit;
}

console.log(addDigits(243)); // 9
console.log(addDigits(2345)) // 5
