// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let x = 1;
while (x <= 5) {
  console.log(x)
  x++;
}


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;

do {
  console.log(i);
  i++;
} while (i<6);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive);

for (let i=1; i<6; i++) {
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let y = 10;

while (y > 0) {
  console.log(y)
  y--;
}

//do while loop 
let z = 10
do {
  console.log(z);
  z--;
} while (z > 0);

//for loop

for(i=10; i > 0; i--) {
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let w = 7

while (w <= 27 && w >=7) {
  console.log(w);
  w++;
}

//do while loop

let v=7
do {
  console.log(v);
  v++;
} while (v<=27 &&  v>=7);

//for loop

for (i=7; i<=27 && i>=7; i++){
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let u = 0
while (u<=100 && u>=0) {
  console.log(u);
  u += 10;
}

//do while loop
let t = 0;
do {
  console.log(t);
  t += 10;
} while (t<=100 && t>=0);

//for loop

for (i=0; i<=100 && i>=0; i+= 10){
  console.log(i);
}

//
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

/*The loop was running infinitely towards the negative because the only condition was for it 
to decrement < 2 there was no stopping point*/

let counterFour = 0
while (counterFour < 2 && counterFour >= -100) {
  console.log(counterFour);
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let myFave=0

while (myFave>=0 && myFave<=8){
  console.log(myFave);
  myFave++;
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

for(i=0; i<=100; i++) {
  if (i === 8) {
    console.log("my favorite number!");
  } else {
    console.log("not my favorite number");
  }
  console.log(i);
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

//for loops are common when you know how many times 
// you want the loop to run, while loops are more  conditional

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/


for (let outsideCounter = 0; outsideCounter <= 3 && outsideCounter >= 0; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter<=3 && insideCounter >= 1; insideCounter--) {
    for(let x=insideCounter; insideCounter<=3 &&  insideCounter>=1; insideCounter--) {
      console.log("inside " + insideCounter);
    }
  } 
  console.log("***********************************");
}

// // Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

//THIS LAST  PROBLEM MAN lol very hard for me. But I tested and tried things out until it worked.
//only refs I used was freeCodeCamp to brush on my syntax for loops

// Email your file to us or commit your file to GitHub and email us a link.