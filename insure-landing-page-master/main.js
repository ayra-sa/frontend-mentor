const navMobile = document.getElementById("nav_mobile")
const navMenu = document.querySelector(".nav_right")

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")
})