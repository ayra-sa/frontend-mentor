const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const btnReset = document.getElementById("reset");
const button = document.querySelectorAll(".btn");

// const inputValue = () => {
//     const val = billValue.value
// }

button.forEach((b) => {
  b.addEventListener("click", () => {
    // console.log(b.textContent.trim() * 2)
    tipButtons(b);
    if (bill.value != 0) {
      tip();
    }
  });
});

bill.addEventListener("keyup", () => {
  tip();
});

people.addEventListener("keyup", () => {
  tip();
  tipPeople();
});

custom.addEventListener("keyup", () => {
  tip();
  tipCustom();
  tipPeople();
});

const tip = () => {
  if (people.value != 0) {
    button.forEach((elem) => {
    //   console.log(elem);
      if (elem.classList.contains("active")) {
    //   if (elem.) {
        let total = Number(bill.value * (elem.innerHTML.slice(0, -1) / 100));
        document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
        tipPeople();
      }
    });
  } else {
    people.parentElement.classList.add("error");
  }
};

const tipButtons = (btn) => {
    custom.value = "";
    
    if (custom.value == 0) {
        button.forEach((elem) => {
      if (!(elem.classList.contains('active')) && elem.innerHTML == "50%") {
        btn.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });
  } else {
    tipCustom();
  }
};

const tipPeople = () => {
  if (people.value != 0) {
    people.parentElement.classList.remove("error");
    let person = document.getElementById("total").innerHTML.slice(1) / people.value;
    document.getElementById("amount").innerHTML = `$${person.toFixed(2)}`;
    reset(person);
  } else {
    people.parentElement.classList.add("error");
    document.getElementById("amount").innerHTML = `$0.00`;
  }
};

const tipCustom = () => {
  button.forEach((elem) => {
    elem.classList.remove("active");
  });

  if (custom.value != 0) {
    let customValue = bill.value * (custom.value / 100);
    document.getElementById("total").innerHTML = `$${customValue.toFixed(2)}`;
  } else {
    document.getElementById("total").innerHTML = `$0.00`;
  }
};

const reset = (value) => {
  console.log(value);
  if (value == 0) {
    btnReset.disabled = true;
  } else {
    btnReset.disabled = false;
    btnReset.addEventListener("click", () => {
      button.forEach((elem) => {
        elem.classList.remove("active");
      });
      people.value = "";
      custom.value = "";
      bill.value = "";
      document.getElementById("total").innerHTML = `$0.00`;
      document.getElementById("amount").innerHTML = `$0.00`;
      btnReset.disabled = true;
    });
  }
};
