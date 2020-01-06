const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const name = nameInput.addEventListener("input", changeName);

function changeName(name) {
  nameOutput.textContent = name.target.value;
}
