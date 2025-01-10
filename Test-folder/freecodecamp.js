function reverseString(str) {
  const revStr = []
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    //console.log(character)
    revStr.unshift(character);
  }
  //console.log(revStr.join(""));
  return revStr.join("");
}
//console.log(reverseString("hello"))
//console.log(reverseString("howdy"))
// console.log(reverseString("yay"))

//problem 3
// function factorialize(num) {
//   for (let i = 1; i <= num; i++) {
//     num *= i
//     console.log(num);
//     console.log(i);
//   }
//   return num;
// }

function factorialize(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorialize(0)); // expected -> 1
console.log(factorialize(5)); // 120
console.log(factorialize(10)); //  3628800
/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/ 


//PROBLEM 5


/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
  let result = [];

  for(let i=0; i<arr.length; i++) {
    let individArray = arr[i];
    let individHighestNum = -Infinity;
    for (let j = 0; j < individArray.length; j++) {
      if (individHighestNum < individArray[j]) {
        individHighestNum = individArray[j];
      }
    }
    result.push(individHighestNum);
  }
return result
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //correct answer: [ 27, 5, 39, 1001 ]

/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
*/

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let result = "";
  for (let i=0; i < num; i++){
    result += str;
}
return result;
}
console.log(repeatStringNumTimes("abc", 3)); //answer should read: abcabcabc