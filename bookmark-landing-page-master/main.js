const titleTab = document.querySelectorAll(".title-tab");
const contentTab = document.getElementsByClassName("content-tab");
const faqContent = document.getElementsByClassName("faq-content")
const question = document.getElementsByClassName("question")


const openTab = (e, id) => {
    let i;
    for (i = 0; i < contentTab.length; i++) {
        contentTab[i].style.display = "none"
    }

    for (i = 0; i < titleTab.length; i++) {
        titleTab[i].className = titleTab[i].className.replace(" active", "")
    }

    document.getElementById(id).style.display = "flex"
    e.currentTarget.className += " active"
}


for (let j = 0; j < question.length; j++) {
    question[j].addEventListener("click", toggleItem, false)
}

function toggleItem () {
    
    const item = this.parentNode.className
    for (let i = 0; i < faqContent.length; i++) {
        faqContent[i].className = 'faq-content'
    }
    if (item == 'faq-content') {
        this.parentNode.className = 'faq-content open'
    }
}


const navMobile = document.querySelector(".nav-mobile")
const navMenu = document.querySelector(".nav-right")
const body = document.body

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("open")

    if (navMenu.classList.contains('active')) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflowY = 'unset'
    }
})

const form = document.getElementById("form")
const email = document.getElementById("email")


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
        printErr(input, "Whooops, make sure it's an email")
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()

    checkEmail(email)
})