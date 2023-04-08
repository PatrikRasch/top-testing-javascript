import { shipFactory } from "./shipFactory.js";
import { shipHit } from "./shipHit.js";
import { isSunk } from "./isSunk.js";
import { gameboardFactory } from "./gameboardFactory.js";
import { receiveAttack } from "./receiveAttack.js";
import { findShip } from "./findShip.js";

const gameboard1 = gameboardFactory(8);
const gameboard2 = gameboardFactory(8);

// const ship1 = shipFactory(3, 0, false);
// const ship2 = shipFactory(3, 0, false);

console.log(gameboard1);

// placeShip(ship, gameboard, coord, orientation);

const firstAttack = receiveAttack(gameboard1, "2.2");
console.log(firstAttack);
