const data = [
  {
    name: "3-column preview card component challenge",
    link: "3-column-preview-card-component-main/index.html",
    level: "newbie",
    image: "3-column-preview-card-component-main/design/desktop-preview.jpg",
  },
  {
    name: "Four card feature section challenge",
    link: "four-card-feature-section-master/index.html",
    level: "newbie",
    image: "four-card-feature-section-master/design/desktop-preview.jpg",
  },
  {
    name: "Fylo landing page with two column layout challenge",
    link: "fylo-landing-page-with-two-column-layout-master/index.html",
    level: "newbie",
    image:
      "fylo-landing-page-with-two-column-layout-master/design/desktop-preview.jpg",
  },
  {
      name: "Huddle landing page with curved sections challenge",
      link: "huddle-landing-page-with-curved-sections-master/index.html",
      level: "newbie",
      image: "huddle-landing-page-with-curved-sections-master/design/desktop-preview.jpg"
  },
  {
      name: "Huddle landing page with single introductory challenge",
      link: "huddle-landing-page-with-single-introductory-section-master/index.html",
      level: "newbie",
      image: "huddle-landing-page-with-single-introductory-section-master/design/desktop-preview.jpg"
  },
  {
      name: "NFT preview card component challenge",
      link: "nft-preview-card-component-main/index.html",
      level: "newbie",
      image: "nft-preview-card-component-main/design/desktop-preview.jpg"
  },
  {
      name: "Product preview card component challenge",
      link: "product-preview-card-component-main/index.html",
      level: "newbie",
      image: "product-preview-card-component-main/design/desktop-preview.jpg"
  },
  {
      name: "Profile card component challenge",
      link: "profile-card-component-main/index.html",
      level: "newbie",
      image: "profile-card-component-main/design/desktop-preview.jpg"
  },
  {
      name: "QR code component challenge",
      link: "qr-code-component-main/index.html",
      level: "newbie",
      image: "qr-code-component-main/design/desktop-preview.jpg"
  },
  {
      name: "Single price grid component challenge",
      link: "single-price-grid-component-master/index.html",
      level: "newbie",
      image: "single-price-grid-component-master/design/desktop-preview.jpg"
  },
  {
      name: "Order summary card challenge",
      link: "order-summary-component-main/index.html",
      level: "newbie",
      image: "order-summary-component-main/design/desktop-preview.jpg"
  },
  {
      name: "Stats preview card component challenge",
      link: "stats-preview-card-component-main/index.html",
      level: "newbie",
      image: "stats-preview-card-component-main/design/desktop-preview.jpg"
  },
  {
      name: "Social proof section challenge",
      link: "social-proof-section-master/index.html",
      level: "newbie",
      image: "social-proof-section-master/design/desktop-preview.jpg"
  },
  {
      name: "Interactive rating component challenge",
      link: "interactive-rating-component-main/index.html",
      level: "newbie",
      image: "interactive-rating-component-main/design/desktop-preview.jpg"
  },
  {
      name: "FAQ accordion card challenge",
      link: "faq-accordion-card-main/index.html",
      level: "newbie",
      image: "faq-accordion-card-main/design/desktop-preview.jpg"
  },
];

let displayData = document.getElementById("data");
// let displayBtn = document.getElementById("top_btn")

// const listBtn = data.map((dt, index) => {
//     return `
//         <button class="btn_tag ${dt.level}" key=${index} onclick="filterData('${dt.level}')">${dt.level}</button>
//     `
// })

const listData = data.map((d, index) => {
  return `<a href=${d.link} target="_blank" class="card ${d.level}" key=${index}>
            <figure>
                <img src=${d.image} alt=${d.name} />
            </figure>
            <div class="card_detail">
                <h2>${d.name}</h2>
                <p>${d.level}</p>
            </div>
        </a>`;
}).join('');

displayData.innerHTML = listData;


// filter

// const filterData = data.filter(d => d.level === "newbie")

// const handleClick = document.getElementById("filter")

// handleClick.addEventListener("click", filterData())

const filterData = (value) => {

    let elements = document.querySelectorAll(".card")
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide")
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide")
            } else {
                element.classList.add("hide")
            }
        }
    })

    let btn = document.querySelectorAll(".btn_tag")
    btn.forEach((b) => {
        console.log(value.toUpperCase())
        console.log(b.innerText, b)
        if (value.toUpperCase() == b.innerText.toUpperCase()) {
            b.classList.add("active")
        } else {
            b.classList.remove("active")
        }
    })
}




window.onload = () => {
    filterData('all')
}