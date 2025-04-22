const cells = document.getElementsByClassName("cell");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (this.textContent !== "") return;
    this.textContent = currentPlayer;
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });
}
