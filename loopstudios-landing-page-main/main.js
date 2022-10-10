const navMobile = document.getElementById("nav_mobile")
const navMenu = document.querySelector(".nav_menu")

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")
})