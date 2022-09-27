const checkBox = document.getElementById("checbox")
const monthly = document.getElementsByClassName("monthly")
const annually = document.getElementsByClassName("annually")
const switchTextMonthly = document.getElementsByClassName("switch_text-monthly")
const switchTextAnnually = document.getElementsByClassName("switch_text-annually")

const check = () => {
    for (let i = 0; i < monthly.length; i++) {
        if (checkBox.checked == true) {
            // switchTextMonthly[i].style.color = "hsl(232, 13%, 33%)";
            // switchTextAnnually[i].style.color = "hsl(234, 14%, 74%)";
            monthly[i].style.display = "flex";
            annually[i].style.display = "none";
        } else if (checkBox.checked == false) {
            monthly[i].style.display = "none";
            annually[i].style.display = "flex";
            // switchTextAnnually[i].style.color = "hsl(232, 13%, 33%)";
            // switchTextMonthly[i].style.color = "hsl(234, 14%, 74%)";
        }
    }
}

check()