// import { gameplay } from "./gameplay.js";
import { gameboardFullShipHorizontal, gameboardFullShipVertical, testShip } from "./instances.js";
import { placeShip } from "./placeShip.js";
placeShip(testShip, gameboardFullShipHorizontal, "1.1", "horizontal");
placeShip(testShip, gameboardFullShipVertical, "1.1", "vertical");
