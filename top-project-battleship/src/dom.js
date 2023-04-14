import { gameboardHuman, gameboardComputer, shipArrayUser1, shipArrayUser2 } from "./gameplay";

const headerTitle = document.querySelector(".header-title");

const playerShips = document.querySelector(".player-ships");
const computerShips = document.querySelector(".computer-ships");

const playerGameboard = document.querySelector(".player-gameboard");
const computerGameboard = document.querySelector(".computer-gameboard");

const shipsLeftPlayer = document.querySelector(".ships-left-player-value");
const shipsLeftComputer = document.querySelector(".ships-left-computer-value");

const hitsTakenPlayer = document.querySelector(".hits-taken-player-value");
const hitsTakenComputer = document.querySelector(".hits-taken-computer-value");

const renderGameboard = (gameboard, numOfSquares) => {
  for (let i = 0; i < numOfSquares; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.coord = gameboardHuman[i].coord;
    gameboard.appendChild(cell);
  }
};

const updateHits = (array, hitsTaken) => {
  let hitCount = 0;
  array.forEach((element) => {
    hitCount += element.hits;
  });
  hitsTaken.textContent = hitCount;
};

const updateShipsLeft = (array, shipsLeft) => {
  let shipsCount = array.length;
  array.forEach((element) => {
    if (element.sunk === true) shipsCount -= 1;
  });
  shipsLeft.textContent = shipsCount;
};

updateHits(shipArrayUser1, hitsTakenPlayer);
updateShipsLeft(shipArrayUser1, shipsLeftPlayer);

updateHits(shipArrayUser2, hitsTakenComputer);
updateShipsLeft(shipArrayUser2, shipsLeftComputer);

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
