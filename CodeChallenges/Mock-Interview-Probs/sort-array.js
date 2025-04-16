/*
[1, 5, 6, 8, 2, 4, 9] => [1,2,4,5,6,8,9]
return an array that is sorted*/

//for loop 
// function sortNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         //increment from smallest => largest prev# + 1
//         for (let j = i + 1; j < arr.length; j++) {
//             const newArr = arr[i] < arr[j] //needs to be put into array
//             if (arr[j] < arr[i]) {
//             }
//         }
//         console.log(arr[i])
//     }
// }

// console.log(sortNum([1, 5, 6, 8, 2, 4, 9]))

//INTERVIEWER SOLUTION
function customSort(arr) {
  const newArr = [...arr]; // avoid modifying the original array
  const len = newArr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (newArr[j] < newArr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap
      const temp = newArr[i];
      newArr[i] = newArr[minIndex];
      newArr[minIndex] = temp;
    }
  }

  return newArr;
}

console.log(customSort([5, 7, 8, 2, 1, 9]))

//SOLUTION: 2
// const array = [5, 7, 8, 2, 1, 9] // [1, 2,5,7,8,9]
// function sortArrays(arr) {
// let arrLen = arr.length

// for (let i=0; i<arrLen; i++) {
//   //compare to something (with another loop)
//   for(let j= i + 1; j<arrLen-1; j++){
//     //condition to swap
//     if (arr[j] < arr[i]) {
//        [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }
//   return arr
// }
// console.log(sortArrays(array))

//change the break if arr.length === 0
//dont modify array

/*SOLUTION: 3
function recursiveSort(arr) {
  if (arr.length === 0) {
    return []; //?
  }

  let smallestIndex = 0 //use this to splice method, remove 
  for (let i=1; i<arr.length; i++) {
    if(arr[i] < arr[smallestIndex]) {
      smallestIndex = i
      console.log(smallestIndex)
      console.log(arr[smallestIndex])
    }
  }

  const [smallestValue] = arr.splice(smallestIndex, 1) //splice(start, deleteCount)
  return [smallestValue, ...recursiveSort(arr)]
}


console.log(recursiveSort(array))*/