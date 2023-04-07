import { receiveAttack } from "../receiveAttack.js";
// import { shipHit } from "../shipHit.js";

const testShip = { id: 1, length: 3, hits: 1, sunk: false };

const gameboard = [
  { coord: "0.1", containsShip: false },
  { coord: "0.2", containsShip: false },
  { coord: "1.1", containsShip: testShip.id },
  { coord: "1.2", containsShip: false },
];

const attackReceivedHit = receiveAttack(gameboard, "1.1");
const attackReceivedMiss = receiveAttack(gameboard, "1.2");

// * Must check whether gameboard.coord contains the receiveAttack coordinate
// * If it does, register hit and send shipHit to the correct ship
// * If it does not, record missed hit

it("Receives an attack and hits", () => {
  expect(attackReceivedHit).toBe(1);
});

it("Receives an attack and misses", () => {
  expect(attackReceivedMiss).toBe(false);
});
