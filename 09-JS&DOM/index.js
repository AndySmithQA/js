// const para = document.querySelector('p')
// console.log(para);

// const paraClass = document.querySelector('.error')
// console.log(paraClass);

// const paras = document.querySelectorAll('p')
// console.log(paras)

// console.log(paras[2]);

// paras.forEach(para =>{
//     console.log(para)
// })

// get Element By Id

// const title = document.getElementById('page-title')
// console.log(title);

// // get Elements By ClassName

// const errors = document.getElementsByClassName('error')
// console.log(errors);

// console.log(errors[0]);

//This does not work!!!!!
// errors.forEach(error =>{
//     console.log(error);
// })

//Tag name

// const parasTag = document.getElementsByTagName('p')
// console.log(parasTag);


//Editing the Page

// const para = document.querySelector('p')
// console.log(para.innerText);
// para.innerText = "Rainy Morning"

// const paras = document.querySelectorAll('p')
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += " New Text"
// })

//HTML

// const content = document.querySelector('.content')
// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a header in the div </h2>'



// const people = ["Dave", "Frank", "Kate", "Mike"]

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// })

//Create Elements and Text Nodes

let el = document.createElement('p')
let text = document.createTextNode(`Try Some backticks`)

el.appendChild(text)

// <p> Try Some backticks </p>

document.querySelector('#newtext').appendChild(el)