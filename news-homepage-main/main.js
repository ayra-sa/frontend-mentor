const navMobile = document.getElementById("nav-mobile")
const navMenu = document.querySelector(".nav-right")

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")
})