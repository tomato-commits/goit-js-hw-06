function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorElement = document.querySelector(".color");

changeColorBtn.addEventListener("click", handleFunction);

function handleFunction() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorElement.innerHTML = color;
};