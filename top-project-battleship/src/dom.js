import { gameboardHuman, gameboardComputer } from "./gameplay";

const headerTitle = document.querySelector(".header-title");

const playerShips = document.querySelector(".player-ships");
const computerShips = document.querySelector(".computer-ships");

const playerGameboard = document.querySelector(".player-gameboard");
const computerGameboard = document.querySelector(".computer-gameboard");

const renderGameboard = (gameboard, numOfSquares) => {
  for (let i = 0; i < numOfSquares; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.coord = gameboardHuman[i].coord;
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

// TODO - Loop over gameboard in order to check which one's contains ships.
// TODO - If it contains a ship and is your own, add a class which adds colour.

renderGameboard(playerGameboard, gameboardHuman.length);
renderGameboard(computerGameboard, gameboardHuman.length);
markShipsOnGameboard(gameboardHuman, playerGameboard);
markShipsOnGameboard(gameboardComputer, computerGameboard);
