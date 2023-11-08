// const content = document.querySelector('p')
// console.log(content.classList);

// content.classList.add('another')
// content.classList.remove('error')
// console.log(content.classList);


// const test = document.querySelector('.test')

// console.log(test.innerText);
// console.log(test.textContent);

const paras = document.querySelectorAll('p')

paras.forEach(para =>{
    if(para.textContent.includes('error')){
        para.classList.add('error')
    }
    if(para.textContent.includes('success')){
        para.classList.add('success')
    }
})

//toggle

const title = document.querySelector('.title')
title.classList.toggle('test')
title.classList.toggle('test')
console.log(title.classList);