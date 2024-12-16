function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".control-input");
const createButton = document.querySelector(".create-btn");
const destroyButton = document.querySelector(".destroy-btn");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();

  const elements = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    elements.push(box);
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});
