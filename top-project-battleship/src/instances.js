import { shipFactory } from "./shipFactory";
import { gameboardFactory } from "./gameboardFactory";

// * testShip has a length of 3 and has taken 0 hits.
const testShip = shipFactory(3, 0, false);

// * testShipOneFromSunk has a length of 3 and has taken 2 hits already.
const testShipOneFromSunk = shipFactory(3, 2, false);

// * gameboardClean has no ships on it
const gameboardClean = gameboardFactory(8);

// * gameboardOneSquare only has a 1x1 ship on it, on coord "1.1"
const gameboardOneSquare = gameboardFactory(8);
const gameboardElement = gameboardOneSquare.find((element) => element.coord === "1.1");
gameboardElement.containsShip = testShip.id;

// * gameboardFullShipHorizontal has a 1x3 ship on it, on coord "1.1", "1.2" and "1.3"
const gameboardFullShipHorizontal = gameboardFactory(8);
// Populate gameboard with testship's full length to test placeShip
const element1 = gameboardFullShipHorizontal.find((element) => element.coord === "1.1");
element1.containsShip = testShip.id;
const element2 = gameboardFullShipHorizontal.find((element) => element.coord === "1.2");
element2.containsShip = testShip.id;
const element3 = gameboardFullShipHorizontal.find((element) => element.coord === "1.3");
element3.containsShip = testShip.id;

// * gameboardFullShipVertical has a 1x3 ship on it, on coord "1.1", "2.1" and "3.1"
const gameboardFullShipVertical = gameboardFactory(8);
// Populate gameboard with testship's full length to test placeShip
const element4 = gameboardFullShipVertical.find((element) => element.coord === "1.1");
element4.containsShip = testShip.id;
const element5 = gameboardFullShipVertical.find((element) => element.coord === "2.1");
element5.containsShip = testShip.id;
const element6 = gameboardFullShipVertical.find((element) => element.coord === "3.1");
element6.containsShip = testShip.id;

// * gameboardFullShipVerticalAllHit has a 1x3 ship on it, on coord "1.1", "2.1" and "3.1", which have all been hit
const gameboardFullShipVerticalAllHit = gameboardFactory(8);
// Populate gameboard with testship's full length to test placeShip
const element7 = gameboardFullShipVerticalAllHit.find((element) => element.coord === "1.1");
element7.containsShip = testShip.id;
element7.cellHit = true;
const element8 = gameboardFullShipVerticalAllHit.find((element) => element.coord === "2.1");
element8.containsShip = testShip.id;
element8.cellHit = true;
const element9 = gameboardFullShipVerticalAllHit.find((element) => element.coord === "3.1");
element9.containsShip = testShip.id;
element9.cellHit = true;

export {
  gameboardClean,
  gameboardOneSquare,
  gameboardFullShipHorizontal,
  gameboardFullShipVertical,
  gameboardFullShipVerticalAllHit,
  testShip,
  testShipOneFromSunk,
};
