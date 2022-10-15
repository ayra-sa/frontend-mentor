const topDropdown = document.getElementsByClassName("top_dropdown")
const dropdownMenu = document.getElementById("dropdown")


for (let i = 0; i < topDropdown.length; i++) {
    topDropdown[i].addEventListener("click", openDropdown, false)
}

function openDropdown() {
    // const item = this.parentNode.className
    // for (i = 0; i < dropdownMenu.length; i++) {
    //     dropdownMenu[i].className = 'dropdown close'
    // }
    // if (item == 'dropdown close') {
    //     this.parentNode.className = 'dropdown open'
    // }

    dropdownMenu.classList.toggle("open")
}

const navMobile = document.getElementById("nav_mobile")
const navMenu = document.querySelector(".nav_content")

navMobile.addEventListener("click", () => {
    navMobile.classList.toggle("active")
    navMenu.classList.toggle("active")
})