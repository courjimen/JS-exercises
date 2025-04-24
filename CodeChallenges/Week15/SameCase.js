/*Write a function that will check if two given characters are the same case. 
If either of the characters is not a letter, return -1. 
If both characters are the same case, return 1. 
If both characters are letters, but not the same case, return 0.

Examples
'a' and 'g' returns 1		    'A' and 'C' returns 1		    'b' and 'G' returns 0
'B' and 'g' returns 0	    	'0' and '?' returns -1
*/

//function (two args) compare the two to see if same case
//utilize an if else else? conditional statment
//need to compare cases using methods .toLowerCase() & .toUpperCase()

function sameCase(a, b) {
    if (typeof a !== "string" && typeof b !== "string") { //always separate arguments && takes higher precedence over !== so it's read as (a) && (b!== "string")
        return -1
    }

    //isLetter strictly checks for characters between a-z
    const aIsLetter = (a >= 'a'  && a<='z' || a>='A' && a<='Z')
    const bIsLetter = (b >= 'a'  && b<='z' || b>='A' && b<='Z')
    if (!aIsLetter || !bIsLetter){
        return -1
    }

    //need separate if statements else if will not be reached if first condition is met loop will end
    if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
        return 1
    } else {
        return 0
    }
}

console.log(sameCase('a', 'g')) // Output: 1
console.log(sameCase('S', 'F')) // Output: 1
console.log(sameCase('a', 'D')) // Output: 0
console.log(sameCase('0', '?')) // Output: -1