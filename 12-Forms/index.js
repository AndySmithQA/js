const nameInput = document.querySelector('[name="name"]')

const validateNameLength = event =>{
    if (event.target.value.length < 2){
        console.log("name not long enough")
        nameInput.focus()
    }
}

nameInput.addEventListener('change', validateNameLength)

const formSubmit = event =>{
    event.preventDefault()
    alert("The Form Was Submitted")
    for (let i = 0; i < 3; i++){
        console.log(event.target[i].value)
    }
}

document.querySelector('form').addEventListener('submit', formSubmit)

const check = obj => obj.value.length < 1 ? obj.classList.add('error') : obj.classList.remove('error')


document.querySelector('[name="email]').addEventListener('blur', check)