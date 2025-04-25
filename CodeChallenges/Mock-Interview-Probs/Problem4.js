/*Create a function that moves all capital letters to the front of a word. Keep the original relative order of the upper and lower case letters the same.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt" */

//1. function capToFront --> split() method --> iterate array 
//2. if (grab capital by index(method toUpperCase())
//3. use filter method --> new array --> join (concat ())
//4. slice()at cap letter and add to beginning of the array (unshift method)

function capToFront(str) {
    const splitStr = str.split("")
    // console.log(splitStr)
    const upperCaseLetters = splitStr.filter((c) => c === c.toUpperCase())
    // console.log(upperCaseLetters)
    const lowerCaseLetters = splitStr.filter((c) => c === c.toLowerCase())
    return upperCaseLetters.concat(lowerCaseLetters).join("")
}

console.log(capToFront("hApPy")) //➞ "APhpy"

console.log(capToFront("moveMENT")) //➞ "MENTmove"

console.log(capToFront("shOrtCAKE")) //➞ "OCAKEshrt"

console.log(capToFront("shOrt CAKE")) //➞ "O CAKEshrt "