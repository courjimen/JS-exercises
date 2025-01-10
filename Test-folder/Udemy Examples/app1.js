const arr = ['Laurence','Linda','Joe','Jane'];
console.log(arr);
console.log('FOR')
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// FOR LOOP outputs all the names
console.log('WHILE')
let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
// ForEach LOOP = easiest
console.log('ForEach');
arr.forEach((item,index,arry)=> {
    console.log(item);
})
// FILTER loop is able to create a new array from an existing array

console.log('FILTER');
const arr2 = arr.filter((item, index)=> {
    console.log(item, index);
    return item, index;
});

//ARRAYS

const arr3 = ['Laurence','Next'];
arr3.push('End Push'); //adds "end push"
const val1 = arr3.shift(); //removes first value
const val2 = arr3.pop(); //removes last value
arr3.unshift(val1);
console.log(val1);
console.log(val2);
console.log(arr3);
console.log(arr3);

const str1 = arr3.toString();
console.log(str1);

const str2 = arr3.join('-'); //'join' allows us to combine with - or commas
console.log(str2);

//MAP and ARRAYS