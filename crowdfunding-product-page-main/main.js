const navMobile = document.getElementById("nav-mobile")
const navMenu = document.querySelector(".nav-menu")

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const selectBtn = document.getElementsByClassName("select")
const modal = document.querySelector(".modal-back")
const modalFront = document.querySelector(".modal-front")
const modalSuccess = document.querySelector(".modal-success")
const closeBtnModal = document.getElementsByClassName("close-modal")
const continueBtn = document.getElementsByClassName("continue")


for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener("click", () => {
        modal.classList.add("open")
        modalSuccess.classList.remove("open")
        modalFront.classList.remove("close")
        console.log(i)
    })
}

for (let i = 0; i < closeBtnModal.length; i++) {
    closeBtnModal[i].addEventListener("click", () => {
        modal.classList.remove("open")
    })
}

for (let i = 0; i < continueBtn.length; i++) {
    continueBtn[i].addEventListener("click", () => {
        modalFront.classList.add("close")
        modalSuccess.classList.add("open")
    })
}