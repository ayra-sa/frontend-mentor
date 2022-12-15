const navMenu = document.querySelector(".nav-menu")
const hamburgerButton = document.querySelector(".nav-mobile")

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburgerButton.classList.toggle("active")
})

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const contentSlide = document.getElementsByClassName("content")
let currentSlide = 0

nextBtn.addEventListener("click", () => {
    changeSlide(currentSlide + 1)
})

prevBtn.addEventListener("click", () => {
    changeSlide(currentSlide - 1)
})

const changeSlide = moveTo => {
    if (moveTo >= contentSlide.length) {moveTo = 0}
    if (moveTo < 0) {moveTo = contentSlide.length - 1}

    contentSlide[currentSlide].classList.toggle("active")
    contentSlide[moveTo].classList.toggle("active")
    
    currentSlide = moveTo
}

