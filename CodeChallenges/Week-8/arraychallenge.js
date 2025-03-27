/*

Create a function named `filterObjects` that takes three arguments: 
- an array of objects (`data`),
- a string representing a property name (`propertyName`), and
- a value.

The function should return a new array containing only the objects from the original array whose value for the specified property matches the provided value. If no objects match the criteria, the function should return an empty array.

*/

//function filterObjects ([], '', value ) => {}
//string show the word or array item & value to show color

const fruits = [
   {orange: 'orange'},
   {apple: 'red'},
   {banana: 'yellow'},
]
const newArr = fruits.filter(filterObjects)

//filter fruit by length of characters
function filterObjects() {
    return fruits.filter(fruits.property.length > 6)
}

console.log(filterObjects());