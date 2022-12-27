import data from "./data.json" assert { type: "json" };

const cardSmall = document.getElementById("cards-right");
const timeWrap = document.getElementById("time-wrap");
const times = timeWrap.getElementsByClassName("time");
const timeList = document.querySelectorAll(".time");
console.log(timeList)
let daily = null;
let weekly = null;
let monthly = null;
// const daily = document.querySelectorAll(".daily");
// const weekly = document.querySelector(".weekly");
// const monthly = document.querySelector(".monthly");

console.log(data);
// console.log(cardSmall, daily);

const cardList = data
  .map((d, index) => {
    // console.log(d.title.toString())
    return `
        <div class="card" key=${index}>
            <div class="card-top ${d.title.toLowerCase()}">
                <img src="./images/icon-${d.title.toLowerCase()}.svg" alt="icon ${d.title.toLowerCase()}" />
            </div>
            <div class="card-bottom">
                <div class="card-bottom-title">
                    <b>${d.title}</b>
                    <img src="images/icon-ellipsis.svg" alt="icon" />
                </div>

                <div class="card-bottom-info daily">
                    <p class="current">${d.timeframes.daily.current}hrs</p>
                    <p>Last week ${d.timeframes.daily.previous}</p>
                </div>
                <div class="card-bottom-info weekly">
                    <p class="current">${d.timeframes.weekly.current}hrs</p>
                    <p>Last week ${d.timeframes.weekly.previous}</p>
                </div>
                <div class="card-bottom-info monthly">
                    <p class="current">${d.timeframes.monthly.current}hrs</p>
                    <p>Last week ${d.timeframes.monthly.previous}</p>
                </div>
            </div>
        </div>
    `;
  })
  .join("");

cardSmall.innerHTML = cardList;
daily = document.querySelectorAll(".daily");
weekly = document.querySelectorAll(".weekly");
monthly = document.querySelectorAll(".monthly");
// console.log(target, `hello ${daily}`);

// for (let i = 0; i < times.length; i++) {
//   // console.log(i);
//   times[i].addEventListener(
//     "click",
//     () => {
//       let elem = times[0]
//       while (elem) {
//         if (elem.tagName === "BUTTON") {
//           elem.classList.remove("active")
//         }
//         elem = elem.nextSibling
//       }

//       console.log(this)
//       this.classList.add("active")

//       // let current = document.getElementsByClassName("white");
//       // console.log(current.className)
//       // current[0].className = current[0].className.replace(" white", "");
//       // this.className += " white";
//     }, this
//   );
// }
// timeList.forEach(time => {
//   time.addEventListener("click", ()=> {
//   })
// })

const reset = () => {
  timeList.forEach(time => {
    time.classList.remove("active")
  })
}

timeList.forEach((f) => {
  f.addEventListener("click", (e) => {
    
    reset();
    f.classList.add("active")

    daily.forEach((d) =>
      e.currentTarget.innerText.toLowerCase() == "daily"
        ? (d.style.display = "block")
        : (d.style.display = "none")
    );
    weekly.forEach((w) => {
      e.currentTarget.innerText.toLowerCase() == "weekly"
        ? (w.style.display = "block")
        : (w.style.display = "none");
    });
    monthly.forEach((m) => {
      e.currentTarget.innerText.toLowerCase() == "monthly"
        ? (m.style.display = "block")
        : (m.style.display = "none");
    });
  });
});

// window.onload = () => {
//     selectTime('daily')
// }
