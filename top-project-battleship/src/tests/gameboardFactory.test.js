import { gameboardFactory } from "../gameboardFactory";

const gameboard = gameboardFactory(2);

it("Creates gameboard", () => {
  expect(gameboard).toEqual([
    { coord: "0.1", containsShip: false },
    { coord: "0.2", containsShip: false },
    { coord: "1.1", containsShip: false },
    { coord: "1.2", containsShip: false },
  ]);
});
