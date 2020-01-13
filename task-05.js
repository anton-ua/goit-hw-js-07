const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const defName = nameOutput.innerText;

nameInput.addEventListener("input", changeName);

function changeName(name) {
  if (name.target.value.length > 0) {
    nameOutput.textContent = name.target.value;
  } else {
    nameOutput.textContent = defName;
  }
}
