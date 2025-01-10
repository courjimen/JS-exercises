/*Write the code to sum all salaries and store in the variable sum. 
Should be 390 in the example below. If salaries is empty, then the result must be 0
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
let val = Object.values(salaries).slice(0,3);
let sum = 0
for(let i=0; i<val.length; i++){
    sum = sum + val[i]
}
console.log(sum);