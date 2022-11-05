const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async (e) => {
  let response = await fetch(url);
  let data = await response.json();
  // let dataJson = await response.json()
  // let html = ''

  const display = document.getElementById("main");

  console.log(data.slip.id);
  console.log(display);

  const content = `
    <div class="content">
        <span>advice #${data.slip.id}</span>
        <p>" ${data.slip.advice} "</p>
        <picture>
          <source media="(min-width: 1280px)" srcset="images/pattern-divider-desktop.svg">
          <img src="images/pattern-divider-mobile.svg" alt="pattern">
        </picture>

        <button id="click" onclick="fetchAdvice()">
          <img src="images/icon-dice.svg" alt="dice" />
        </button>
    </div>
  `;

  display.innerHTML = content;
};

fetchAdvice();
