import { receiveAttack } from "../receiveAttack.js";
import { gameboardOneSquare } from "../instances.js";

const attackReceivedHit = receiveAttack(gameboardOneSquare, "1.1");
const attackReceivedMiss = receiveAttack(gameboardOneSquare, "1.2");

beforeEach(() => {
  gameboardOneSquare.forEach((element) => {
    element.cellHit = false;
  });
});

it("Receives an attack and hits", () => {
  expect(attackReceivedHit).toBe(1);
});

it("Receives an attack and misses", () => {
  expect(attackReceivedMiss).toBe(false);
});
