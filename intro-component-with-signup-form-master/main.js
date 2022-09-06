const form = document.getElementById('form')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const password = document.getElementById('password')



const printErr = (input, msg) => {
    const formControl = input.parentElement
    formControl.className = 'form_control error'
    const print = formControl.querySelector('small')
    print.innerText = msg
}


const printSuccess = input => {
    const formControl = input.parentElement
    formControl.className = 'form_control success'
}


// const checkEmail = input => {
//     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     if(regex.test(input.value.trim())) {
//         printSuccess(input)
//     } else {
//         printErr(input, 'Email is not invalid')
//     }
// }

const checkRequired = inputArr => {
    inputArr.forEach(input => {
        console.log(input)
        if(input.value.trim() === '') {
            printErr(input, `Field Input is required`)
        } else {
            printSuccess(input)
        }
    })
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkRequired([firstName, lastName, email, password])
    // checkEmail(email)
})