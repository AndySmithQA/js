// console.log(1);
// console.log(2);

// //some kind of network request
// setTimeout(() =>{
//     console.log(("Callback fired"));
// }, 2000)

// console.log(3);
// console.log(4);


// const getTodos = (resource) => {
//     return new Promise((resolve,reject) =>{
//          const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', ()=>{

//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//     } else if (request.readyState === 4){
//         reject("Error Getting Data")
//     }
// })

// request.open('GET',resource )
// request.send();
//     })
   
// }

// getTodos('todos.jsons').then(data =>{
//     console.log("promise Resolved", data);
// }).catch((err) => {
//     console.log("promise Rejected", err);
// })


// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Some Data")
//         // reject("Some Error")
//     })
// }

// getSomething().then((data) =>{
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// getSomething().then(data =>{
//     console.log(data)
// }).catch(err => {
//     console.log(err);
// })



// console.log(1);
// console.log(2);

// getTodos((err,data) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// console.log(3);
// console.log(4);


// fetch('todos.json').then((response)=>{
//     console.log("Resolved", response);
//     return response.json()
// }).then(data =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log("Rejected", err);
// })


const getTodos = async (resource) => { //always returns a promise
    const response = await fetch(resource)

    if (response.status !== 200){
        throw new Error("Cannot fetch Data")
    }

    const data = await response.json()
    return data
}



getTodos('todos.json').then(data =>{
    console.log('Promise 1 Resolved:', data)
    return getTodos('https://jsonplaceholder.typicode.com/todos')
}).then(data =>{
    console.log('Promise 2 Resolved:', data)
}).catch((err) => {
    console.log("Promiise Rejected")
})
   
