import { shipHit } from "../shipHit.js";
import { shipFactory } from "../shipFactory.js";

const testShip = shipFactory(3, 0, false);

it("Hits the ship", () => {
  expect(shipHit(testShip)).toEqual({ length: 3, hits: 1, sunk: false });
});
