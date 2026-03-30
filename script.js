//Number
const gridInput = document.querySelector("#gridInput");
const resetBtn = document.querySelector("#resetBtn");

//Container
const container = document.querySelector("#container");
container.style.aspectRatio = "1/1";
container.style.display = "flex";

container.style.border = "1px solid black";

const buildGrid = () => {
  container.innerHTML = "";
  const grid = parseInt(gridInput.value);
  for (i = 0; i < grid; i++) {
    const gridRow = document.createElement("div");

    gridRow.style.display = "flex";
    gridRow.style.flexDirection = "column";
    gridRow.style.flex = "1";

    for (j = 0; j < grid; j++) {
      const gridColumn = document.createElement("div");

      gridColumn.style.flex = "1";
      gridColumn.style.border = "1px solid black";

      gridColumn.addEventListener("mouseenter", () => {
        gridColumn.style.backgroundColor = "black";
      });

      gridRow.appendChild(gridColumn);
    }

    container.appendChild(gridRow);
  }
};

gridInput.addEventListener("input", () => {
  if (gridInput.value > 100) gridInput.value = 100;
  if (gridInput.value < 1) gridInput.value = 1;
  buildGrid();
});

resetBtn.addEventListener("click", () => {
  container
    .querySelectorAll("div")
    .forEach((cell) => (cell.style.backgroundColor = ""));
});

buildGrid();
