import data from "./data.json" assert { type: "json" };

let displayData = document.getElementById("data");
const continueBtn = document.getElementById("continue")
const modalWrap = document.querySelector(".modal_wrap")
const body = document.body

continueBtn.addEventListener("click", () => {
  modalWrap.classList.remove("open")
  body.style.overflowY = "unset"
})

const listData = data
  .map((d, index) => {
    return `<div class="card ${d.level}" key=${index}>
                <figure>
                    <img src=${d.image} alt=${d.name} />
                </figure>
                <div class="card_bottom">
                    <div class="card_detail">
                        <h2>${d.name}</h2>
                        <p>${d.level}</p>
                    </div>
                    <div class="card_link">
                        <a href=${d.repo} target="_blank" class="btn_secondary">Repository</a>
                        <a href=${d.link} target="_blank" class="btn_primary">Demo</a>
                    </div>
                </div>
            </div>`;
  })
  .join("");

displayData.innerHTML = listData;

let btn = document.querySelectorAll(".btn_tag");

btn.forEach((b) => {
  b.addEventListener("click", (v) => {
    // console.log(v);
    // console.log(b);

    removeActive()
    b.classList.add("active")
    

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      console.log(v.target.innerText)
      if (v.target.innerText == "All") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(v.target.innerText.toLowerCase())) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  });
});

const removeActive = () => {
  btn.forEach(bn => {
    bn.classList.remove("active")
  })
}

// window.onload = () => {
//   alert("helloooo")
// };
