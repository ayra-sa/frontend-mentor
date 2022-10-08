let index = 1


const showSlides = n => {
    let i
    const slides = document.getElementsByClassName("card")
    console.log(slides.length)

    if (n > slides.length) {index = 1}
    if (n < 1) {index = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[index-1].style.display = "flex"
}

showSlides(index)

const plusSlides = n => {
    showSlides(index += n)
}