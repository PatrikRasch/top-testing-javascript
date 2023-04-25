import { gameboardFactory } from "./gameboardFactory.js";
import { shipFactory, shipArrayPlayer1, shipArrayPlayer2 } from "./shipFactory.js";
import { placeShip } from "./placeShip.js";
import { playerFactory } from "./playerFactory.js";
import { receiveAttack } from "./receiveAttack.js";
import { findShip } from "./findShip.js";
import { shipHit } from "./shipHit.js";
import { isSunk } from "./isSunk.js";
import { allShipsSunk } from "./allShipsSunk.js";

import { event, registerHit } from "./dom.js";

// * DOM elements
const headerTitle = document.querySelector(".header-title");
const player1ships = document.querySelector(".player-ships");
const player2ships = document.querySelector(".computer-ships");
const player1gameboardDom = document.querySelector(".player-gameboard");
const player2gameboardDom = document.querySelector(".computer-gameboard");

const player1gameboard = gameboardFactory(10);
const player2gameboard = gameboardFactory(10);

const player1ship1 = shipFactory(3, 0, false, 1);
const player1ship2 = shipFactory(2, 0, false, 1);
const player1ship3 = shipFactory(1, 0, false, 1);

const player2ship1 = shipFactory(3, 0, false, 2);
const player2ship2 = shipFactory(2, 0, false, 2);
const player2ship3 = shipFactory(1, 0, false, 2);

// const player1 = playerFactory("Svein-Egil");
// const player2 = playerFactory("Computer");

// placeShip(player1ship1, player1gameboard, "1.1", "horizontal");
// placeShip(player1ship2, player1gameboard, "3.3", "vertical");
placeShip(player1ship3, player1gameboard, "5.5", "horizontal");

// placeShip(player2ship1, player2gameboard, "1.1", "horizontal");
// placeShip(player2ship2, player2gameboard, "3.3", "vertical");
placeShip(player2ship3, player2gameboard, "5.5", "horizontal");

let isPlayer1Turn = { value: false };

const game = (playerGameboardDom, playerGameboard, shipArray) => {
  const handleAttack = (e) => {
    const hitOrMiss = receiveAttack(playerGameboard, e.target.dataset.coord);
    const registerHitEvent = new CustomEvent("registerHit", { detail: { target: e.target } });
    playerGameboardDom.dispatchEvent(registerHitEvent);
    if (hitOrMiss !== false) {
      const hitShip = findShip(shipArray, hitOrMiss);
      shipHit(hitShip);
      const shipSunk = isSunk(hitShip);
      if (shipSunk === true) {
        const registerShipSunkEvent = new CustomEvent("registerShipSunk", { detail: { target: e.target } });
        playerGameboardDom.dispatchEvent(registerShipSunkEvent);
        if (allShipsSunk(playerGameboard) !== false) {
          const registerWinnerEvent = new CustomEvent("registerWinner", { detail: isPlayer1Turn });
          document.dispatchEvent(registerWinnerEvent);
          playerGameboardDom.removeEventListener("click", handleAttack);
          return;
        }
      }
    }
    playerGameboardDom.removeEventListener("click", handleAttack);
    if (isPlayer1Turn.value === true) {
      isPlayer1Turn.value = false;
      game(player2.dom, player2.gameboard, player2.ships);
    } else {
      isPlayer1Turn.value = true;
      game(player1.dom, player1.gameboard, player1.ships);
    }
  };
  playerGameboardDom.addEventListener("click", handleAttack);
};

const player1 = {
  dom: player1gameboardDom,
  gameboard: player1gameboard,
  ships: shipArrayPlayer1,
};
const player2 = {
  dom: player2gameboardDom,
  gameboard: player2gameboard,
  ships: shipArrayPlayer2,
};

game(player2.dom, player2.gameboard, player2.ships);

export { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2 };
