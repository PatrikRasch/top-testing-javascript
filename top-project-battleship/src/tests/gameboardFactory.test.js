import { gameboardFactory } from "../gameboardFactory";

const gameboard = gameboardFactory(2);

it("Creates gameboard", () => {
  expect(gameboard).toEqual([
    { coord: "0.0", containsShip: false, cellHit: false },
    { coord: "0.1", containsShip: false, cellHit: false },
    { coord: "1.0", containsShip: false, cellHit: false },
    { coord: "1.1", containsShip: false, cellHit: false },
  ]);
});
