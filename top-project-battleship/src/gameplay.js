import { shipFactory, shipArrayUser1, shipArrayUser2 } from "./shipFactory.js";
import { shipHit } from "./shipHit.js";
import { isSunk } from "./isSunk.js";
import { gameboardFactory } from "./gameboardFactory.js";
import { receiveAttack } from "./receiveAttack.js";
import { findShip } from "./findShip.js";
import { allShipsSunk } from "./allShipsSunk.js";
import { placeShip } from "./placeShip.js";
import { playerFactory } from "./playerFactory.js";

// * Formatting for function calls
// placeShip(ship, gameboard, coord, orientation)
// receiveAttack(gameboard, coord);
// shipFactory(length, hits, sunk, player)

const gameboardHuman = gameboardFactory(10);
const gameboardComputer = gameboardFactory(10);

const shipHuman1 = shipFactory(3, 0, false, 1);
const shipHuman2 = shipFactory(2, 0, false, 1);
const shipHuman3 = shipFactory(1, 0, false, 1);

const shipHumanComputer1 = shipFactory(3, 0, false, 2);
const shipHumanComputer2 = shipFactory(2, 0, false, 2);
const shipHumanComputer3 = shipFactory(1, 0, false, 2);
const playerHuman = playerFactory("Svein-Egil");
const playerComputer = playerFactory("Computer");

placeShip(shipHuman1, gameboardHuman, "1.1", "horizontal");
placeShip(shipHuman2, gameboardHuman, "3.3", "vertical");
placeShip(shipHuman3, gameboardHuman, "5.5", "horizontal");

placeShip(shipHumanComputer1, gameboardComputer, "1.1", "horizontal");
placeShip(shipHumanComputer2, gameboardComputer, "3.3", "vertical");
placeShip(shipHumanComputer3, gameboardComputer, "5.5", "horizontal");

const game = () => {
  // User attack a square
  // Attack registered
  // Ship sunk? Check if all ship's have sunk
  // Computer attacks back
  // Attack registered
  // Ship sunk? Check if all ship's have sunk
  // If all ships have sunk, announce winner
  // If not, loop
};

// User click start

game();

export { gameboardHuman, gameboardComputer, shipArrayUser1, shipArrayUser2 };
