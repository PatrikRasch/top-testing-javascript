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

// * Formatting for function calls
// placeShip(ship, gameboard, coord, orientation)
// receiveAttack(gameboard, coord);
// shipFactory(length, hits, sunk, player)

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

const player1 = playerFactory("Svein-Egil");
const player2 = playerFactory("Computer");

placeShip(player1ship1, player1gameboard, "1.1", "horizontal");
placeShip(player1ship2, player1gameboard, "3.3", "vertical");
placeShip(player1ship3, player1gameboard, "5.5", "horizontal");

placeShip(player2ship1, player2gameboard, "1.1", "horizontal");
placeShip(player2ship2, player2gameboard, "3.3", "vertical");
placeShip(player2ship3, player2gameboard, "5.5", "horizontal");

const game = (playerGameboardDom, playerGameboard, shipArray) => {
  playerGameboardDom.addEventListener("click", (e) => {
    const attackedEvent = new CustomEvent("attacked", { detail: { target: e.target } });
    playerGameboardDom.dispatchEvent(attackedEvent);
    const hitOrMiss = receiveAttack(playerGameboard, e.target.dataset.coord);
    if (hitOrMiss !== false) {
      const hitShip = findShip(shipArray, hitOrMiss);
      shipHit(hitShip);
      isSunk(hitShip);
      // console.log(allShipsSunk(playerGameboard));
      if (allShipsSunk(playerGameboard) !== false) console.log("we have a winner!");
    }
  });

  // If all ships have sunk, announce winner
  // If not, loop
};

// User click start

game(player1gameboardDom, player1gameboard, shipArrayPlayer1);
game(player2gameboardDom, player2gameboard, shipArrayPlayer2);

export { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2 };
