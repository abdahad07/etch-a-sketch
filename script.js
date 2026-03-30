const grid = 30;

//Container
const container = document.querySelector("#container");
container.style.aspectRatio = "1/1";
container.style.display = "flex";

container.style.border = "1px solid black";

// Grid
for (i = 0; i < grid; i++) {
  const gridRow = document.createElement("div");

  gridRow.style.display = "flex";
  gridRow.style.flexDirection = "column";
  gridRow.style.flex = "1";

  for (j = 0; j < grid; j++) {
    const gridColumn = document.createElement("div");

    gridColumn.style.flex = "1";
    gridColumn.style.border = "1px solid black";

    gridRow.appendChild(gridColumn);
  }

  container.appendChild(gridRow);
}
