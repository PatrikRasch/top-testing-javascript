import { shipFactory } from "./shipFactory.js";
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

const gameboardHuman = gameboardFactory(10);
const gameboardComputer = gameboardFactory(10);

const shipHuman1 = shipFactory(3, 0, false);
const shipHuman2 = shipFactory(2, 0, false);
const shipHuman3 = shipFactory(1, 0, false);

const shipHumanComputer1 = shipFactory(3, 0, false);
const shipHumanComputer2 = shipFactory(2, 0, false);
const shipHumanComputer3 = shipFactory(1, 0, false);

const playerHuman = playerFactory("Svein-Egil");
const playerComputer = playerFactory("Computer");

placeShip(shipHuman1, gameboardHuman, "1.1", "horizontal");
placeShip(shipHuman2, gameboardHuman, "3.3", "vertical");
placeShip(shipHuman3, gameboardHuman, "5.5", "horizontal");

placeShip(shipHumanComputer1, gameboardComputer, "1.1", "horizontal");
placeShip(shipHumanComputer2, gameboardComputer, "3.3", "vertical");
placeShip(shipHumanComputer3, gameboardComputer, "5.5", "horizontal");

const game = () => {};

game();

export { gameboardHuman, gameboardComputer };
