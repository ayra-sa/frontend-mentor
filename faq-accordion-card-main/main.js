const faqBox = document.getElementsByClassName("faq_content-box")
const handleClick = document.getElementsByClassName("question")



for (i=0; i<handleClick.length; i++) {
    handleClick[i].addEventListener("click", toggleItem, false)
}

function toggleItem () {
    
    const item = this.parentNode.className
    for (i = 0; i < faqBox.length; i++) {
        faqBox[i].className = 'faq_content-box close'
    }
    if (item == 'faq_content-box close') {
        this.parentNode.className = 'faq_content-box open'
    }
}