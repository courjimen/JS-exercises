/* Part One: Convert an object into a new array which consists of all the keys in sequential order.
Part Two: Given an array of objects and the task is to convert the object keys to an array with the help of JavaScript. */


// // 1. Create a function convertsObj (obj) --> converts to an arr (grabs only keys)
// let myObj = {
//     name: "your name",
//     address: "your address",
//     age: "your Age",
// }

// function convertObjToArr(myObj) {
//     //use object method
//     return Object.keys(myObj)
// }

// //2. Convert an array of object keys into it's own array
// let myObjArr = [
//     {
//         name: "your name",
//         address: "your address",
//         age: "your Age",
//     },
//     {
//         pet: "your name",
//         friend: "your address",
//         car: "your Age",
//     },
//     {
//         school: "your name",
//         restaurant: "your address",
//         country: "your Age",
//     }];

// function multipleObjsToArr(myObjArr) {
// //map through array and use previous function to grab keys
//     const objArr = myObjArr.map((keys) => convertObjToArr(keys))
//     return objArr.flat() //flat combines all arrays
// }

// // console.log(convertObjToArr(myObjArr)) // Output: ["name", "address", "age"]
// console.log(multipleObjsToArr(myObjArr))

// SECOND OPTION
/*
function (obj) grabs key-value pair => for ...of method use map to get key 
 */

    let myObj = [
        {
          name: "your name",
          address: "your address",
          age: "your Age",
        },
        {
          color: "your name",
          song: "your address",
          show: "your Age",
        },
        {
          pet: "your name",
          sibling: "your address",
          friend: "your Age",
        }
      ]
      // myObj
      
      function convertObjToArr(obj) {
        //push the keys into []
        const newArr = []
        for (const key in obj) {
          console.log(key)
          newArr.push(key)
        }
        return newArr
      }
      // Object.keys
      //part two grabbing keys of multiple objects in array
      function multipleObjToArr(arr) {
        const twoDimenArr = arr.map((el) => convertObjToArr(el))
        const oneArr = twoDimenArr.flat()
        return oneArr
      } 
      
      // console.log(convertObjToArr(myObj))
      console.log(multipleObjToArr(myObj))