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