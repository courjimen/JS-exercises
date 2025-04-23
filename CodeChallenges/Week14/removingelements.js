/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. There are no empty arrays.
*/

/* create a function that takes an array, 

*/

function removal (arr) { 
    for (i=0; i<arr.length; i++) {
        //remove or filter the odd indexes
        const newArr = arr.filter((_, index) => index % 2 === 0) //syntax for filter
        return newArr
    }
}

function secondRemoval (arr) {
    const newArr = []

    for (i=0; i<arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    } 
    return newArr
}

console.log(removal(["Keep", "Remove", "Keep", "Remove", "Keep"])) //Output: ["Keep", "Keep", "Keep", ...]

console.log(secondRemoval(["Keep", "Remove", "Keep", "Remove", "Keep"])) //Output: ["Keep", "Keep", "Keep", ...]