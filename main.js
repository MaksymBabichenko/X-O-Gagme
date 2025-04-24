const cells = document.getElementsByClassName("cell");
const board = document.querySelector(".board");
const gameStatus = document.querySelector(".status h2");

let isGameEnded = false;
let currentPlayer = "X";

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkIsWin() {
  for (const comb of winCombinations) {
    const [a, b, c] = comb;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkIsDraw() {
  // let draw = false;
  // for (let cell of cells) {
  //   if (cell.textContent === "") {
  //     draw = false;
  //     break;
  //   }
  //   draw = true;
  // }

  // return draw;
  return !Array.from(cells).some((cell) => cell.textContent === "");
}

const userWin = () => {
  gameStatus.textContent = "Win!";
  console.log("win");
};
const userDraw = () => {
  gameStatus.textContent = "GameOver!";
  console.log("draw");
};

const restart = () => {
  isGameEnded = false;
  for (let cell of cells) {
    cell.textContent = "";
  }
  gameStatus.textContent = "";
  currentPlayer = "X";
  // возвращать игру к изначальному виду
};

board.addEventListener("click", function (event) {
  if (isGameEnded) return;
  const cell = event.target;
  if (cell.classList.contains("cell") && cell.textContent === "") {
    cell.textContent = currentPlayer;

    const isWin = checkIsWin();
    if (isWin) {
      // ...some action if win
      userWin();
      isGameEnded = true;
      setTimeout(restart, 5000);
      return;
    }

    const isDraw = checkIsDraw();
    if (isDraw) {
      // ...some action if draw
      userDraw();
      isGameEnded = true;
      setTimeout(restart, 5000);
      return;
    }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
});
