import { shipHit } from "../shipHit";
import { isSunk } from "../isSunk.js";

const testShip = { length: 3, hits: 2, sunk: false };
shipHit(testShip);

it("Sinks the ship", () => {
  expect(isSunk(testShip)).toEqual({ length: 3, hits: 3, sunk: true });
});
