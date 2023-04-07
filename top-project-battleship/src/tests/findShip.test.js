import { findShip } from "../findShip.js";

const shipArray = [{ id: 1, length: 3, hits: 0, sunk: false }];

it("Finds the ship", () => {
  expect(findShip(shipArray, 1)).toEqual({ id: 1, length: 3, hits: 0, sunk: false });
});

it("Does not find the ship", () => {
  expect(findShip(shipArray, 2)).toEqual(false);
});
