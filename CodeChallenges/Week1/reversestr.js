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
