/* 

Working with Math methods:

1. Generate an array of 10 random integers between 1 and 100.
2. Then, round down half of the numbers to the nearest integer using Math.floor and round up the other half using Math.ceil. 
3. Finally, find the minimum and maximum values among the rounded numbers.

*/

/*  
create a function that takes empty array, incorporate it into a loop
*/

function randNum () {
    let number = [];
    for (let i=0; i<10; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        number.push(randomNum);
    }
    return number
}

const tenRandNum = randNum();
console.log(tenRandNum);