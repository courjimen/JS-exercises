// Reverse the provided string and return the reversed string. 
// For example, "hello" should become "olleh".

// Examples
// 
// reverseString("hello") should return the string olleh.
// reverseString("Howdy") should return the string ydwoH.
// reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

function reverseString(str) { // create a function the accepts a string variable
    const arr1 = str.split(""); // create an array to split (into individual characters)
    const arr2 = arr1.reverse(); // reverse the array of characters
    console.log(arr2.join("")); // rejoin 
} 
reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");

/*Given an input string, reverse the string word by word, the first word will be the last, and so on.

Examples
reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a"
 */

function reverseWords(str) {
    const word = str.split(' ')
    // console.log(word)
    const revWord = word.reverse()
    return revWord.join(" ")
}

console.log(reverseWords(" the sky is blue"))

console.log(reverseWords("hello world!"))

console.log(reverseWords("a good example")) 