import { shipHit } from "../shipHit";
import { isSunk } from "../isSunk.js";
import { testShipOneFromSunk } from "../instances";

shipHit(testShipOneFromSunk);

it("Sinks the ship", () => {
  expect(isSunk(testShipOneFromSunk)).toEqual(true);
});
