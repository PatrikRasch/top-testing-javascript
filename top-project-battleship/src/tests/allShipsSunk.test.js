import { allShipsSunk } from "../allShipsSunk.js";
import { gameboardFullShipHorizontal, gameboardFullShipVerticalAllHit } from "../instances.js";

it("Registers that all ships have sunk", () => {
  expect(allShipsSunk(gameboardFullShipHorizontal)).toBe(false);
});

it("Registers that all ships have sunk", () => {
  expect(allShipsSunk(gameboardFullShipVerticalAllHit)).toBe(true);
});
