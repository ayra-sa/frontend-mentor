const faqBox = document.getElementsByClassName("faq_content-box")
const handleClick = document.getElementsByClassName("question")



for (i=0; i<handleClick.length; i++) {
    handleClick[i].addEventListener("click", toggleItem, false)
}

function toggleItem () {
    // handleClick.classList.toggle("active")
    
    // let answer = this.nextElementSibling
    // if (answer.style.display === "block") {
    //     answer.style.display = "none"
    // } else {
    //     answer.style.display = "block"
    // }
    const item = this.parentNode.className
    for (i = 0; i < faqBox.length; i++) {
        faqBox[i].className = 'faq_content-box close'
    }
    if (item == 'faq_content-box close') {
        this.parentNode.className = 'faq_content-box open'
    }
}