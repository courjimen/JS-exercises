/*
[1, 5, 6, 8, 2, 4, 9] => [1,2,4,5,6,8,9]
return an array that is sorted*/

//for loop 
function sortNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        //increment from smallest => largest prev# + 1
        for (let j = i + 1; j < arr.length; j++) {
            const newArr = arr[i] < arr[j] //needs to be put into array
            if (arr[] < arr[i]) {
            }
        }
        console.log(arr[i])
    }
}

console.log(sortNum([1, 5, 6, 8, 2, 4, 9]))

/*SOLUTION
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

// Example usage:
const unsort*/