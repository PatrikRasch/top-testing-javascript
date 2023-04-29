import { gameboardFactory } from "./gameboardFactory.js";
import { shipFactory, shipArrayPlayer1, shipArrayPlayer2 } from "./shipFactory.js";
import { placeShip } from "./placeShip.js";
import { playerFactory } from "./playerFactory.js";
import { receiveAttack } from "./receiveAttack.js";
import { findShip } from "./findShip.js";
import { shipHit } from "./shipHit.js";
import { isSunk } from "./isSunk.js";
import { allShipsSunk } from "./allShipsSunk.js";

// * DOM elements
const player1gameboardDom = document.querySelector(".player-gameboard");
const player2gameboardDom = document.querySelector(".computer-gameboard");

const player1gameboard = gameboardFactory(10);
const player2gameboard = gameboardFactory(10);

const player1ship1 = shipFactory(5, 0, false, 1);
const player1ship2 = shipFactory(4, 0, false, 1);
const player1ship3 = shipFactory(3, 0, false, 1);
const player1ship4 = shipFactory(2, 0, false, 1);
const player1ship5 = shipFactory(1, 0, false, 1);

const player2ship1 = shipFactory(5, 0, false, 2);
const player2ship2 = shipFactory(4, 0, false, 2);
const player2ship3 = shipFactory(3, 0, false, 2);
const player2ship4 = shipFactory(2, 0, false, 2);
const player2ship5 = shipFactory(1, 0, false, 2);

let isPlayer1Turn = { value: false };

const AI = (playerGameboardDom, playerGameboard) => {
  const playerGameboardDomArray = [...playerGameboardDom.children];
  let randomNumber = Math.floor(100 * Math.random());
  while (playerGameboard[randomNumber].cellHit === true) {
    randomNumber = Math.floor(100 * Math.random());
  }
  const attackTime = Math.floor(600 * Math.random()) + 550;
  setTimeout(() => {
    playerGameboardDomArray[randomNumber].click();
    // if (playerGameboard[randomNumber].containsShip !== false) {
    //   let target = playerGameboard[randomNumber].coord;
    //   const splitTarget = target.split(".");
    //   const targetArray = [Number(splitTarget[0]), Number(splitTarget[1])];
    //   const newTargetArray = [targetArray[0], targetArray[1] + 1];
    //   const newTarget = newTargetArray[0].toString() + "," + newTargetArray[1].toString();
    // }
  }, attackTime);
};

const game = (playerGameboardDom, playerGameboard, shipArray) => {
  if (isPlayer1Turn.value === true) {
    AI(playerGameboardDom, playerGameboard);
  }

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

const headerAction = document.querySelector(".header-action-button");
headerAction.addEventListener("click", (e) => {
  game(player2.dom, player2.gameboard, player2.ships);
});

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

export { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2, placeShip };
