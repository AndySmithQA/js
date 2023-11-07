//Selection


// let age = 55

// if (age < 18){
//     console.log("You are too young");
//     window.open("http://www.google.com")
// } else if (age == 18) {
//     console.log("You just made it");

// } else if (age > 45){

// } 

// else {
//     console.log("You are of age. Welcome");
// }



// let greeting = "Good";

// if (now.getHours() >= 15){
//     greeting += " Evening"
// } else {
//     greeting += " Day"
// }

// console.log(greeting)

//ternary if
// let greeting = "Good" + ((now.getHours() > 14) ? " Evening" : " Day" )

// console.log(greeting);


//Switch Case
// let now = new Date();

// switch (now.getDay()) {
//     case 0:
//         document.write("It's Sunday")
//         break
//     case 1:
//         document.write("It's Monday")
//         break
//     case 2:
//         document.write("It's Tuesday")
//         break
//     case 3:
//         document.write("It's Wednesday")
//         break
//     default:
//         document.write("Apocalypse")
// }

// let age = 19

// if (age > 10){
//     console.log("Age is greater than 10");
// }

// if (age > 11){
//     console.log("Age is greater than 11");
// }

// if (age > 12){
//     console.log("Age is greater than 12");
// }


// let score = prompt("Enter your Score")

// if (score > 90){
//     document.write("You got an A*")
// } else if (score > 80){
//     document.write("You got an A")
// } else if (score > 70){
//     document.write("You got a B")
// } else if (score > 60){
//     document.write("You got a C")
// } else if (score > 50){
//     document.write("You got a D")
// } else if (score > 40){
//     document.write("You got a E")
// } else {
//     document.write("You failed")
// }

//Loops 
//While loop - Conditional loop

// let lives = 3;

// while (lives > 0){
//     console.log(`lives is ${lives}`);
//     lives -= 1
// }

//Do While - always runs at least once

// do {
//     console.log(`From the do while loop lives is ${lives}`);
//     lives -= 1
// } while (lives > 0)


//for loop - unconditional

// for (let i = 0; i < 10; i++){
//     console.log(`i squared is ${i**2}`);
// }

// let people = ['Bob','Dave',"Bill", 'Lisa']

// for (let i = 0; i < people.length; i++ ) {
//     if (people[i][0] == "L"){
//         console.log(people[i]);
//     }
   
// }

// people.forEach(person => {
//     console.log(person);
// })