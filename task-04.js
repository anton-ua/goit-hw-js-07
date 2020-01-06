const increment = document.querySelector("[data-action=increment]");
const decrement = document.querySelector("[data-action=decrement");
const value = document.querySelector("#value");

let currentValue = 0;

increment.addEventListener("click", inc);
decrement.addEventListener("click", dec);

function inc() {
  currentValue += 1;
  value.textContent = currentValue;
}

function dec() {
  currentValue -= 1;
  value.textContent = currentValue;
}
