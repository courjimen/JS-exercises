/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:					
Input: nums = [0,1,0,3,12]		
Output: [1,3,12,0,0]			

Example 2:
Input: nums = [0]
Output: [0]

Example 3:
Input:  nums = [2,0,4,5,0,7,8]
Output: [2,4,5,7,8 0,0]

input = [5,92,0,1,3]
output = [5,92,1,3,0]



Challenge: Can you write your answer without making a copy of the array. Could you minimize the total number of operations done?

- count the number of zeros in the array -- keep track 
- filter all zeroes out of the array
- push the number of zeroes back into the array (we know how many we had)
*/
const moveZeros = (array) => {
    const countZeros = array.reduce((acc, zero) =>  {
        // console.log(zero) // 0, 1,0...
        if(zero === 0){ // 
            return acc + 1; //
        }
        return acc;
    } ,0 );
    // https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array
    const zeroArray = new Array(countZeros).fill(0);
    const filterArr = array.filter((num) => num !== 0) // 
    const finalArr = filterArr.concat(zeroArray);

    return finalArr
} 




console.log(moveZeros([0,1,0,3,12])) //[1,3,12,0,0]	


// [1,2,3], 1

// [1] + [3] = [1,3]

// const removeAtIndex = (arr, index) => {
//     return arr.slice(index) 
// }

/*
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // ['Orange','Lemon']
*/
// console.log(removeAtIndex([1,2,3], 1)); //[1,3]