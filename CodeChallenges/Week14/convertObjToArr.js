/* Part One: Convert an object into a new array which consists of all the keys in sequential order.
Part Two: Given an array of objects and the task is to convert the object keys to an array with the help of JavaScript. 

function (obj) grabs key-value pair => for ...of method
    use map to get key 
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
// Oject.keys
//part two grabbing keys of multiple objects in array
function multipleObjToArr(arr) {
  const twoDimenArr = arr.map((el) => convertObjToArr(el))
  const oneArr = twoDimenArr.flat()
  //.flat() method to combine multiple arrays
  return oneArr
} 

// console.log(convertObjToArr(myObj))
console.log(multipleObjToArr(myObj))