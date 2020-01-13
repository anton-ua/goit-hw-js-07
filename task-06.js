const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("change", validation);

function validation(input) {
  if (
    input.target.value.length ===
    Number(validationInput.attributes["data-length"].value)
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
