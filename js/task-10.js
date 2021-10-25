function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");
const input = document.querySelector("#controls input[type='number']");
let size = 30;

createBtn.addEventListener("click", createBtnHandler);
destroyBtn.addEventListener("click", destroyBoxes);

function createBtnHandler() {
  if (input.value) {
    const boxes = createBoxes(input.value);

    boxesContainer.append(...boxes);
  }
};

function createBoxes(amount) {
  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.push(div);

    size += 10;
  }

  return boxes;
};

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  size = 30;
}