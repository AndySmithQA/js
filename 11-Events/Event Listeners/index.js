const para = document.querySelector('p')
para.onclick = () =>{
    alert("hi")
}

document.querySelector('p').addEventListener('mouseover', makeRed)
document.querySelector('p').addEventListener('mouseout', makeBlack)

const myPara = document.querySelector('p')

function makeRed(){
    myPara.style.color = 'red'
}

function makeBlack(){
    myPara.style.color = ''
}

//Prevent Default

document.getElementById('mya').addEventListener("click", function(event){
    event.preventDefault()
    console.log(event);
})

document.getElementById('b').addEventListener("mousedown", mouseEvent, true)

function mouseEvent(e){
    document.getElementById('out').innerHTML = `${e.pageX} - ${e.pageY}`
}


const anon = document.getElementById('anon')
const arrow = document.getElementById('arrow')

anon.addEventListener('click', function(){
    let out = (this)
    document.getElementById('anonfunction').innerHTML = out
})

arrow.addEventListener('click', ()=>{
    let out = (this)
    document.getElementById('arrowfunction').innerHTML = out
})


