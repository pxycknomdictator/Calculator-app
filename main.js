import "./style.css";

const display = document.querySelector("#display");
const reset = document.querySelector("#reset");
const clear = document.querySelector("#clear");
const buttons = document.querySelectorAll(".btn");

let string = "";
const covertinArray = Array.from(buttons);

const resetDisplay = () => {
  string = "";
  display.value = string;
};

const calcualte = () => {
  string = eval(display.value);
  display.value = string;
};

const remove = () => {
  string = display.value.substring(0, display.value.length - 1);
  display.value = string;
};
covertinArray.forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    let btn = event.target.innerHTML;
    if (btn === "RESET") {
      resetDisplay();
    } else if (btn === "=") {
      calcualte();
    } else if (btn === "DEL") {
      remove();
    } else {
      string = btn;
      display.value += string;
    }
  });
});

// Theme changing script

const radios = document.querySelectorAll(".toggle");

radios.forEach((button) => {
  button.addEventListener("change", (event) => {
    const selectedTheme = event.target.id;

    if (selectedTheme === "first") {
      document.body.classList.remove("secondtheme");
      document.body.classList.remove("thirdtheme");
    } else if (selectedTheme === "second") {
      document.body.classList.add("secondtheme");
      document.body.classList.remove("thirdtheme");
    } else if (selectedTheme === "third") {
      document.body.classList.remove("secondtheme");
      document.body.classList.add("thirdtheme");
    }
  });
});
