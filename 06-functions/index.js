// const calcArea = function(radius){
//     let area = 3.14159 * radius**2;
//     return area
// }

// const area = calcArea(5)
// console.log(area);

//same but less code

// const calcArea2 = function(radius){
//     return 3.14159 * radius**2
// }

// const area2 = calcArea2(5)
// console.log(area2);


//Arrow Functions

// const calcAreaArrow = radius => {
//     return 3.14159 * radius**2
// }

// const arrow = calcAreaArrow(5)
// console.log(arrow);


// const sayHello = () => "Hi there"
// const calcAreaArrow2 = radius => 3.14159 * radius**2
// const rect = (h,l) => h*l

// const arrow2 = calcAreaArrow2(5)
// console.log(arrow2);

//Callback Functions

// const myFunction = callBackFunction =>{
//     let value = 70
//     callBackFunction(value)
//     return value
// }

// //this is a call

// myFunction(function(value){
//     console.log(`Value was ${value}`);
// })

//default parameters + rest pararmeters

// function doSomething(arg1, arg2, arg3=5){
//     return (arg1 + arg2 + arg3)
// }

// console.log(doSomething(2,3));

// //variadic

// function multiply(arg1, ...args) {
//     args.forEach((arg,i,array) => array[i] = arg * arg1)
//     return args
// }
// console.log(multiply(5,4,7,6,5,7,4,5,6,"dave"))


//Scope

// function test(){

//     let flag = true

//     console.log(flag)
//     test1()
//     console.log(flag)
// }

// function test1(){
//     flag = false
  
//     return
// }


// test()




// function test(){
//     let flag = true
//     console.log(flag);
//     test1()
//     console.log(flag);
// }

// function test1(){
//     flag = false
//     return
// }

// test()


// let flag = true

// function test(){
    
//     console.log(flag)
// }


// test()





















