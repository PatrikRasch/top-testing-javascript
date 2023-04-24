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

const markShipsOnGameboard = (gameboard, gameboardDom) => {
  gameboard.forEach((element) => {
    if (element.containsShip !== false) {
      const domElement = gameboardDom.querySelector(`[data-coord="${element.coord}"]`);
      domElement.classList.add("shipOnSquare");
    }
  });
};

renderGameboard(player1gameboardDom, player1gameboard.length);
renderGameboard(player2gameboardDom, player1gameboard.length);
markShipsOnGameboard(player1gameboard, player1gameboardDom);
markShipsOnGameboard(player2gameboard, player2gameboardDom);

let hitsTakenPlayer1value = { value: 0 };
let hitsTakenPlayer2value = { value: 0 };

let shipsLeftPlayer1value = { value: shipArrayPlayer1.length };
let shipsLeftPlayer2value = { value: shipArrayPlayer2.length };

shipsLeftPlayer1.textContent = shipsLeftPlayer1value.value;
shipsLeftPlayer2.textContent = shipsLeftPlayer2value.value;

const updatePlayerDom = (cell, hitsTakenPlayer, hitsTakenPlayerValue) => {
  if (cell.classList.contains("shipOnSquare") && !cell.classList.contains("ship-hit")) {
    cell.classList.add("ship-hit");
    hitsTakenPlayerValue.value += 1;
    hitsTakenPlayer.textContent = hitsTakenPlayerValue.value;
  } else cell.classList.add("cell-hit");
};

const updateShipsLeftDom = (shipsLeftPlayer, shipsLeftPlayerValue) => {
  shipsLeftPlayerValue.value -= 1;
  shipsLeftPlayer.textContent = shipsLeftPlayerValue.value;
};

player1gameboardDom.addEventListener("registerHit", (e) => {
  updatePlayerDom(e.detail.target, hitsTakenPlayer1, hitsTakenPlayer1value);
});
player1gameboardDom.addEventListener("registerShipSunk", (e) => {
  updateShipsLeftDom(shipsLeftPlayer1, shipsLeftPlayer1value);
});

player2gameboardDom.addEventListener("registerHit", (e) => {
  updatePlayerDom(e.detail.target, hitsTakenPlayer2, hitsTakenPlayer2value);
});
player2gameboardDom.addEventListener("registerShipSunk", (e) => {
  updateShipsLeftDom(shipsLeftPlayer2, shipsLeftPlayer2value);
});

export {};

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

// player1gameboardDom.addEventListener("attacked", (e) => {
// const isHit = registerHit(player1gameboard, e.detail.target);
// if (isHit === true) {
//   hitsTakenPlayer1value += 1;
//   hitsTakenPlayer1.textContent = hitsTakenPlayer1value;
//   updateShipsLeft(shipArrayPlayer1, shipsLeftPlayer1);
// }
// });

// player2gameboardDom.addEventListener("attacked", (e) => {
// const isHit = registerHit(player2gameboard, e.detail.target);
// if (isHit === true) {
//   hitsTakenPlayer2value += 1;
//   hitsTakenPlayer2.textContent = hitsTakenPlayer2value;
//   updateShipsLeft(shipArrayPlayer2, shipsLeftPlayer2);
// }
// });
