import { shipHit } from "../shipHit";
import { isSunk } from "../isSunk.js";
import { testShipOneFromSunk } from "../instances";

shipHit(testShipOneFromSunk);

it("Sinks the ship", () => {
  expect(isSunk(testShipOneFromSunk)).toEqual({ id: 2, length: 3, hits: 3, sunk: true, coord: "", orientation: "" });
});
