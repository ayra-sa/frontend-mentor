const unreadNotif = document.querySelectorAll(".unread")
const toggleBtn = document.getElementById("mark")
const badge = document.querySelector(".badge")


toggleBtn.addEventListener("click", () => {
    for (let i = 0; i < unreadNotif.length; i++) {
        unreadNotif[i].classList.remove("unread")
    }
    badge.innerHTML = "0"
})