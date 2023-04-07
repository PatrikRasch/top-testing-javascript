import { shipHit } from "../shipHit.js";
import { shipFactory } from "../shipFactory.js";

const testShip = shipFactory("2.2", "horizontal", 3, 0, false);

it("Hits the ship", () => {
  expect(shipHit(testShip)).toEqual({
    coord: "2.2",
    orientation: "horizontal",
    id: 1,
    length: 3,
    hits: 1,
    sunk: false,
  });
});
