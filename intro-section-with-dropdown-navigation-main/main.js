const dropdown = document.querySelectorAll(".dd")
const dropdownBox = document.querySelectorAll(".dropdown")

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', () => {
        console.log(dropdown[i])
        dropdown[i].classList.toggle('expand')
    })
    // for (let j = 0; j < dropdownBox.length; j++) {
    // }
}

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