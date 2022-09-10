const form = document.getElementById("form")
const email = document.getElementById("email")


const printErr = (input, message) => {
    const formControl = input.parentElement
    formControl.className = "form error"
    const print = formControl.querySelector("small")
    print.innerText = message
}

const printSuccess = input => {
    const formControl = input.parentElement
    formControl.className = "form success"
}

const checkEmail = input => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(input.value.trim())) {
        printSuccess(input)
    } else {
        printErr(input, 'Please provide a valid email')
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()

    checkEmail(email)
})