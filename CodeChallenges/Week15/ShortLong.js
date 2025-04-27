/* PART ONE: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 

PART TWO: The strings will not be the same length, but they may be empty (zero length). 

EDGE CASE: The length of string is not always the same as the number of characters

Example 1 			      Example 2
Input:  ("1", "22")		  Input: ("22", "1")
Output: "1221"		      Output: "1221"

*/

//create a function shortLong (a, b) --> read the character length of both (.length)
function shortLong (a, b ) {
//turn strings into an array
let array = [a, b]
    console.log(array)
//compare the lengths to find shortest (using reduce || sort array method)
    let shortStr = array.sort(function (a,b) {
        return a.length - b.length //b.length- a.length = longest a.length - b.length = shortest
    })[0]
    // console.log(shortStr)
//place the shorter length at the beginning and end (maybe .unshift to add to beginning and .push to add to the end)
    if (shortStr === array[0]) {
        array.push(shortStr)
    } else {
        array.unshift(shortStr)
    } 
    return array.flat().join("") //combinded arrays w/flat and joined both arrays .join("")= no separators, .join()= commas, .join("-") hyphenated
} 

console.log(shortLong("1", "22")) //Output "1221"
console.log(shortLong("22", "1")) //Output "1221"
console.log(shortLong("345", "12")) //Output "1234512"
console.log(shortLong("2", "1234")) //Output "212342"
console.log(shortLong("22", "")) //Output "22"

