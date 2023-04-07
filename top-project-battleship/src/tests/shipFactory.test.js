import { shipFactory } from "../shipFactory.js";

const coord = "2.2";
const orientation = "vertical";
let lastId = 1;
const shipLength = 3;
const shipInitialHits = 0;
const shipSunkStatus = false;
const testShip = shipFactory(coord, orientation, shipLength, shipInitialHits, shipSunkStatus);

it("returns object with arguments", () => {
  expect(testShip).toEqual({ coord: "2.2", orientation: "vertical", id: lastId++, length: 3, hits: 0, sunk: false });
});
