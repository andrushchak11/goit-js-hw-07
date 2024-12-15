const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value.trim();

  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
});