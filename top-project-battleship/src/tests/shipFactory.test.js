import { shipFactory } from "../shipFactory.js";

let lastId = 1;
const shipLength = 3;
const shipInitialHits = 0;
const shipSunkStatus = false;
const testShip = shipFactory(shipLength, shipInitialHits, shipSunkStatus);

it("returns object with arguments", () => {
  expect(testShip).toEqual({ id: lastId++, length: 3, hits: 0, sunk: false, coord: "", orientation: "" });
});
