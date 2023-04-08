import { shipHit } from "../shipHit.js";
import { testShip } from "../instances.js";

it("Hits the ship", () => {
  expect(shipHit(testShip)).toEqual({
    id: 1,
    length: 3,
    hits: 1,
    sunk: false,
    coord: "",
    orientation: "",
  });
});
