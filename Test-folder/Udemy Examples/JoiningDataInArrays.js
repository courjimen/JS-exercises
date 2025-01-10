const arr1 = ['Cour','Alvin'];
const arr2 = [1,2,3,4,5];
const arr3 = arr1.concat(arr2); //(array name).concat joins all the data 2gether
console.log(arr3);

const arr4 = arr1.concat(arr2,['new1','new2']);
console.log(arr4);

const arr5 = arr1; //these arrays now have the same information
arr5.push("END");
console.log(arr1);
console.log(arr5);