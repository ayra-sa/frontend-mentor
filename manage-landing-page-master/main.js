const navMobile = document.querySelector(".nav-mobile")
const navMenu = document.querySelector(".nav-right")
const body = document.querySelector("body")

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")

    if (navMenu.classList.contains("active")) {
        console.log("okee")

        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "auto"
        
    }
})


const testimonialCard = document.querySelectorAll(".testi")
const dotCircle = document.querySelectorAll(".circle")

for (let i = 0; i < dotCircle.length; i++) {
    dotCircle[i].addEventListener("click", () => {
        removeDot()
        removeTesti()
        dotCircle[i].classList.add("active")
        testimonialCard[i].classList.add("active")
        // console.log(dotCircle[i])
        // console.log(testimonialCard[i])
    })
}

const removeDot = () => {
    for (let j = 0; j < dotCircle.length; j++) {
        dotCircle[j].classList.remove("active")
    }
}

const removeTesti = () => {
    for (let k = 0; k < testimonialCard.length; k++) {
        testimonialCard[k].classList.remove("active")
    }
}


const email = document.getElementById("email")
const form = document.getElementById("form")


const printErr = (input, message) => {
    const formControl = input.parentElement
    formControl.className = "input error"
    const print = formControl.querySelector("small")
    print.innerText = message
}

const printSuccess = input => {
    const formControl = input.parentElement
    formControl.className = "input"
}

const checkEmail = input => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(input.value.trim())) {
        printSuccess(input)
    } else {
        printErr(input, "Please insert a valid email")
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()

    checkEmail(email)
})