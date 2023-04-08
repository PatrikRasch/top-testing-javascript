import { placeShip } from "../placeShip.js";
import { gameboardClean, gameboardFullShipHorizontal, gameboardFullShipVertical, testShip } from "../instances.js";

beforeEach(() => {
  gameboardClean.forEach((element) => {
    element.containsShip = false;
  });
});

it("Places ship on the gameboard horizontally", () => {
  expect(placeShip(testShip, gameboardClean, "1.1", "horizontal")).toEqual(gameboardFullShipHorizontal);
});

it("Places ship on the gameboard vertically", () => {
  expect(placeShip(testShip, gameboardClean, "1.1", "vertical")).toEqual(gameboardFullShipVertical);
});
