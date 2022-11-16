const nameCard = document.getElementById("name")
const cardNumber = document.getElementById("card")
const month = document.getElementById("month")
const year = document.getElementById("year")
const cvc = document.getElementById("cvc")
const inputNum = document.querySelectorAll(".input-num")
const completeElement = document.querySelector(".complete")
const closeBtn = document.getElementById("close")

const printErr = (input, message) => {
    const formControl = input.parentElement
    formControl.classList.add("error")
    const print = formControl.querySelector(".blank")
    print.innerText = message
}

const printSuccess = input => {
    const formControl = input.parentElement
    formControl.classList.remove("error")
}

const printErrNum = (input, message) => {
    const formControl = input.parentElement
    formControl.classList.add("error-num")
    const print = formControl.querySelector(".err")
    print.innerText = message
}

const removeErrNum = input => {
    const formControl = input.parentElement
    formControl.classList.remove("error-num")
}

const checkRequired = inputArr => {
    inputArr.forEach(input => {
        if(input.value.trim() === '') {
            printErr(input, "Can't be blank!")
        } else {
            printSuccess(input)
        }
    })
}

const checkNum = () => {
    for (let i = 0; i < inputNum.length; i++) {
        if (!/\D/.test(inputNum[i].value)) {
            removeErrNum(inputNum[i])
        } else {
            printErr(inputNum[i], 'Wrong format, number only')
        }
    }
}

const complete = () => {
    const nameCardValue = nameCard.value
    const cardNumberValue = cardNumber.value
    const monthValue = month.value
    const yearValue = year.value
    const cvcValue = cvc.value

    if (nameCardValue === '' || cardNumberValue === '' || monthValue === '' || yearValue === '' || cvcValue === '') {
        // console.log("kosong")
        return false
    } else {
        console.log('sukses brooo')
        form.style.display = 'none'
        completeElement.style.display = 'flex'
    }
}

closeBtn.addEventListener("click", () => {
    form.reset()
    completeElement.style.display = 'none'
    form.style.display = 'flex'
})


form.addEventListener("submit", e => {
    e.preventDefault()

    checkRequired([nameCard, cardNumber, month, year, cvc ])
    checkNum([cardNumber, month, year, cvc])
    complete()
})