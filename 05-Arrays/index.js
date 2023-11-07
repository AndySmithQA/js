let a = Array()
let b = Array(10)
let c = Array("Tom", "Dick", "Harry")
let d = ["Tom", "Dick", "Harry"]

// d[0] = "Dave"
// console.log(d);
// console.log(d[1]);

// for (let i = 0; i < length.d; i++){
//     console.log(d[i]);
// }

// console.log(d.reverse());

// let fruits = ["Apple", "Pear", "Banana", 'Orange']

// let fruitString = fruits.join("---")

// console.log(fruitString);


//Push

// console.log(fruits.push("Lemon"));
// console.log(fruits);

// //Pop()
// console.log(fruits.pop());
// console.log(fruits);

// //unshift

// console.log(fruits.unshift("Kiwi"));
// console.log(fruits);

// //shift

// console.log(fruits.shift());
// console.log(fruits);

//for of loop

// let myArray = [1,2,3,4]

// for (el of myArray) {
//     if (el === 3){
//         break
//     }
//     console.log(el);
// }


let text = ""
const fruits =["Apple", "Pear", "Banana", 'Orange',"Kiwi"]

fruits.splice(2,0,"Grape")

function myFunction(item, index){
    text += index + ": " + item + "<br>"
}

fruits.forEach(myFunction)

document.write(text)













