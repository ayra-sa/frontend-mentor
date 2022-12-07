const navMobile = document.querySelector(".nav-mobile");
const navMenu = document.querySelector(".nav-right");
const form = document.getElementById("form");
const linkInput = document.getElementById("link");
const url = "https://api.shrtco.de/v2/shorten";
const results = document.getElementById("results");



navMobile.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


const printErr = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "input error";
  const print = formControl.querySelector("small");
  print.innerText = message;
};

const printSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "input";
};

const checkLink = (input) => {
  const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g
  
  if (input.value.trim() === "") {
    printErr(input, "Please add a link");
  } 
  else if (!input.value.match(regex)) {
    printErr(input, "Invalid url link address")
  } 
  else {
    printSuccess(input);
    fetchShortening()
  }
};


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkLink(linkInput);
  // fetchShortening();
});



const fetchShortening = async (e) => {
  let response = await fetch(url+ `?url=${linkInput.value}`);
  let data = await response.json();

  const shortLinkResult = `
        <div class="short">
            <div class="left">
                <p>${data.result.original_link}</p>
            </div>

            <div class="right">
                <p class="new-link">${data.result.full_short_link}</p>
                <button class="btn" id="copy">Copy</button>
            </div>
        </div>
    `;

  results.innerHTML = shortLinkResult;

  console.log(data);
  console.log(data.result);

  const copyButton = document.getElementById("copy");

  copyButton.addEventListener("click", () => {
    const newLink = document.querySelector(".new-link");
    console.log(newLink.innerText.trim());
    navigator.clipboard.writeText(newLink.innerText.trim());
    copyButton.classList.replace("btn", "btn-copy");
    copyButton.innerHTML = "Copied!";
    copyButton.disabled = true;
  });
};

// const shortButton = form.querySelector("button");