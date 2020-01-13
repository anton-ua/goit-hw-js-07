const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", changeSize);

function changeSize(size) {
  text.style.fontSize = size.target.value + "px";
}
