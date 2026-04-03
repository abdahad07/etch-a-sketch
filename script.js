const container = document.querySelector("#container");
const gridInput = document.querySelector("#gridInput");
const resetBtn = document.querySelector("#resetBtn");
const resizeBtn = document.querySelector("#resizeBtn");
const modeBtn = document.querySelector("#modeBtn");

let isDrawing = false;
let isRandomMode = false;

// Mouse hold drawing
document.body.addEventListener("mousedown", () => (isDrawing = true));
document.body.addEventListener("mouseup", () => (isDrawing = false));

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function buildGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mouseover", () => {
      if (!isDrawing) return;

      cell.style.backgroundColor = isRandomMode ? getRandomColor() : "black";
    });

    fragment.appendChild(cell);
  }

  container.appendChild(fragment);
}

// Reset grid
resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = "";
  });
});

// Resize grid
resizeBtn.addEventListener("click", () => {
  let size = parseInt(gridInput.value);
  if (size > 100) size = 100;
  if (size < 1) size = 1;

  gridInput.value = size;
  buildGrid(size);
});

// Toggle mode
modeBtn.addEventListener("click", () => {
  isRandomMode = !isRandomMode;
  modeBtn.textContent = isRandomMode ? "Mode: Rainbow" : "Mode: Black";
});

// Initial render
buildGrid(30);
