function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".control-input");
const createButton = document.querySelector(".create-btn");
const destroyButton = document.querySelector(".destroy-btn");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amound) {
  destroyBoxes();

  const elements = [];
  let boxSize = 30;

  for (let i = 0; i < amound; i++) {
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
  const amound = input.value;

  if (amound >= 1 && amound <= 100) {
    createBoxes(amound);
  }
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
