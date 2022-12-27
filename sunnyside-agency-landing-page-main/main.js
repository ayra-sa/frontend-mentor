const navMobile = document.getElementById("nav-mobile")
const navMenu = document.querySelector(".nav-right")
const body = document.body

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")

    if (navMenu.classList.contains('active')) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflowY = 'unset'
    }
})