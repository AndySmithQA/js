//Objects in JavaScript

// let myBike = new Object()

// myBike.make = "Suzuki"
// myBike.model = "GSXS1000F"

// let myBike2 = {
//     make: 'Kawazaki',
//     model : 'Ninja'
// }


// console.log(myBike)
// console.log(myBike2)

// console.log(myBike.make);
// console.log(myBike2['model']);

// for (let propName in myBike){
//     console.log(`${propName} -- ${myBike[propName]}`);
// }

//Classes

// class Car {

//     constructor (wheels, power) {
//         this._wheels = wheels
//         this._power = power
//         this._speed = 0
//     }

//     accelerate(time) {
//         this._speed = this._speed + 0.5 * this._power
//         return `after ${time} seconds, speed will be ${this._speed} MPH`
//     }

//     get wheels(){
//         return this._wheels
//     }

//     setwheels(wheels){
//         this._wheels = wheels
//     }
// }

// const myCar = new Car(4, 105)
// console.log(myCar)
// const yourcar = new Car(3, 25)
// console.log(yourcar);
// console.log(myCar.wheels);
// myCar.setwheels(8)
// console.log(myCar.wheels);

// console.log(myCar.accelerate(20));
// console.log(yourcar.accelerate(20));

//Inheritance

// class Vehicle{
//     constructor (wheels, power){
//         this._wheels = wheels
//         this._power = power
//         this._speed = 0
//     }

//     accelerate(time) {
//         this._speed = this._speed + 0.5 * this._power
//         return `after ${time} seconds, speed will be ${this._speed} MPH`
//     }
// }

// class Car extends Vehicle{
//     constructor(wheels, power, gps) {
//         super(wheels, power);
//         this._gps = gps
//     }
// }

// class Motorbike extends Vehicle{
//     constructor(wheels, power, chain) {
//         super(wheels, power);
//         this._chain = chain
//     }

//     accelerate(time){
//         this._speed = this._speed + 0.9 * this._power
//         return `Motorbike after ${time} seconds, speed will be ${this._speed} MPH`
//     }
// }

// const myCar = new Car(4, 105, true)
// console.log(myCar);
// console.log(myCar.accelerate(40));
// const myBike = new Motorbike(2, 190, true)
// console.log(myBike)
// console.log(myBike.accelerate(20));


//"use strict"
// let obj = {
//     name: "Dave"
// }

// console.log(obj);
// obj.age = 45
// obj.hair = false
// console.log(obj);
// console.log(Object.isExtensible(obj));

// let obj2 = {
//     name: "bill"
// }
// console.log(obj2);
// Object.preventExtensions(obj2)
// obj2.age = 44
// console.log(obj2);