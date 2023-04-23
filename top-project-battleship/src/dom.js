import { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2 } from "./gameplay";

const headerTitle = document.querySelector(".header-title");

const player1ships = document.querySelector(".player-ships");
const player2ships = document.querySelector(".computer-ships");

const player1gameboardDom = document.querySelector(".player-gameboard");
const player2gameboardDom = document.querySelector(".computer-gameboard");

const shipsLeftPlayer1 = document.querySelector(".ships-left-player-value");
const shipsLeftPlayer2 = document.querySelector(".ships-left-computer-value");

const hitsTakenPlayer1 = document.querySelector(".hits-taken-player-value");
const hitsTakenPlayer2 = document.querySelector(".hits-taken-computer-value");

const renderGameboard = (gameboard, numOfSquares) => {
  for (let i = 0; i < numOfSquares; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.coord = player1gameboard[i].coord;
    gameboard.appendChild(cell);
  }
};

const updateShipsLeft = (array, shipsLeft) => {
  let shipsCount = array.length;
  array.forEach((element) => {
    if (element.sunk === true) shipsCount -= 1;
  });
  shipsLeft.textContent = shipsCount;
};

let hitsTakenPlayer1value = 0;
let hitsTakenPlayer2value = 0;

updateShipsLeft(shipArrayPlayer1, shipsLeftPlayer1);
updateShipsLeft(shipArrayPlayer2, shipsLeftPlayer2);

const markShipsOnGameboard = (gameboard, gameboardDom) => {
  gameboard.forEach((element) => {
    if (element.containsShip !== false) {
      const domElement = gameboardDom.querySelector(`[data-coord="${element.coord}"]`);
      domElement.classList.add("shipOnSquare");
    }
  });
};

// const registerHit = (gameboard, cell) => {
//   const cellInArray = gameboard.find((element) => {
//     return element.coord === cell.dataset.coord;
//   });
//   if (cellInArray.cellHit === true) return false;
//   cellInArray.cellHit = true;
//   if (cell.classList.contains("shipOnSquare")) {
//     cell.classList.add("ship-hit");
//     return true;
//   }
//   if (!cell.classList.contains("shipOnSquare")) {
//     cell.classList.add("cell-hit");
//     return false;
//   }
// };

player1gameboardDom.addEventListener("attacked", (e) => {
  // const isHit = registerHit(player1gameboard, e.detail.target);
  // if (isHit === true) {
  //   hitsTakenPlayer1value += 1;
  //   hitsTakenPlayer1.textContent = hitsTakenPlayer1value;
  //   updateShipsLeft(shipArrayPlayer1, shipsLeftPlayer1);
  // }
});

player2gameboardDom.addEventListener("attacked", (e) => {
  // const isHit = registerHit(player2gameboard, e.detail.target);
  // if (isHit === true) {
  //   hitsTakenPlayer2value += 1;
  //   hitsTakenPlayer2.textContent = hitsTakenPlayer2value;
  //   updateShipsLeft(shipArrayPlayer2, shipsLeftPlayer2);
  // }
});

renderGameboard(player1gameboardDom, player1gameboard.length);
renderGameboard(player2gameboardDom, player1gameboard.length);
markShipsOnGameboard(player1gameboard, player1gameboardDom);
markShipsOnGameboard(player2gameboard, player2gameboardDom);

export {};
