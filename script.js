const container = document.querySelector("#container");

function createGrid(size = 16) {
  container.innerHTML = "";
  container.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}
createGrid();

let isMouseDown = false;

container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "cornflowerblue";
  }
  isMouseDown = true;
});

container.addEventListener("mousemove", (e) => {
  if (isMouseDown && e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "cornflowerblue";
  }
});

window.addEventListener("mouseup", () => {
  isMouseDown = false;
});

function promptNewGridSize() {
  let newSize = parseInt(prompt("Enter a number between 1 and 100 for the new grid size:", ""));

  while (isNaN(newSize) || newSize < 1 || newSize > 100) {
    newSize = parseInt(prompt("Invalid input. Please enter a number between 1 and 100:", ""));
  }

  createGrid(newSize);
}

const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid Size";
document.body.insertBefore(newGridButton, container);

newGridButton.addEventListener("click", promptNewGridSize);
