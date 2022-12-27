const navMobile = document.getElementById("nav_mobile")
const navMenu = document.querySelector(".nav_menu")
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