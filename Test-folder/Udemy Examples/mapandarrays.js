const arr =['Laurence',4,545,false,'Test'];

const arr2 = arr;
arr2.push('NEW');
console.log(arr);

const arr1 = arr.map((item, index, array) => {
    const temp = `${index} ${item}`;
    return temp;
})
arr2.push('NEW');
console.log(arr1);

const arr3 = [3, 54, 62, 4334,1232,444];
const arr4 = arr3.map(val => val*2);
console.log(arr4);

const arr5 = arr3.map(callback1);
console.log(arr5);

function callback1(item){
console.log(item);
return item*2;
}

const arr6 = [{first:'Laurence', last: 'France'}, {first:'John', last: 'Doe'},{first:'Sam', last: "Dean"}]
const arr7 = arr6.map(({first, last})=> {
    //console.log(first, last);
   // return first, last; //using MAP to create a new array with output the exact variables I want to see
   return {user: first,last}; //I can add values/things in the curly brackets to show up in my array
})
console.log(arr7);