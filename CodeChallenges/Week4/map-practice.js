/*

Task 1
Add a property to each friend storing their initials and calculates the sum of all ages to use in calculation of average age. An average is the total of Ages divide for how many friends 

Task 2
Gets an array of all friends older than the average age

Task 3
Gets an array of strings listing the initials and age
Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]

Bonus
How you can work in this programmatically (using a function)*/

// A list of friends stored as an array of objects
const myFriends = [
    { firstname: 'Isma', lastname: 'Kirby', age: 27 },
    { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
    { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
    { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
    { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
    { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
    { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
    { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
    { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
    { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];

// initials: grab the first letter of our firstname and last name
let initials = myFriends.map(friend => friend.firstname[0]+friend.lastname[0]);// console.log(initials)

// average age: total age = (sum of all ages)/num of friends
// reduce method

let average = myFriends.reduce((sum, friend)=> sum + friend.age, 0)/10
// console.log(average);

//Gets an array of all friends older than the average age
//filter method

let oldies = myFriends.filter(friend => friend.age > average);
// console.log(oldies);

// Gets an array of strings listing the initials and age Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]
// join the results of initials and age
let results = oldies.map(friend => friend.firstname[0]+friend.lastname[0]+ ": "+ friend.age)
console.log(results);


