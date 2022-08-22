const btnSubmit = document.getElementById("submit")
const card = document.querySelector(".card")
const thankYouCard = document.querySelector(".thanks")
const btnRate = document.getElementsByName("radio")
let rate = document.querySelector(".rate")




btnSubmit.addEventListener("click", function () {
    console.log("hello")
    card.style.display = "none"
    thankYouCard.style.display = "block"

    for(let i = 0; i < btnRate.length; i++) {
        console.log(i)
        if(btnRate[i].checked) {
            rate.innerHTML = btnRate[i].value
        }
    }
})

