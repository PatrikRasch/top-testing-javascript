const findElementToMark = (gameboard, coord) => {
  return gameboard.find((element) => element.coord === coord);
};

const placeShip = (ship, gameboard, coord, orientation) => {
  if (orientation !== "horizontal" && orientation !== "vertical") {
    return undefined; // If orientation error
  }
  const [startY, startX] = coord.split(".").map(Number); // Make the coordinates into numbers in an array
  let squaresToMark = ship.length; // Define how many squares are to be taken up by the ship
  let anyFalse = false;

  // TODO - Scan the gameboard to see if any coordinates I want to place ships
  // TODO - on already have ships on them. If so, return false.
  // TODO - If not, then go into the loop and place the ship

  while (squaresToMark > 0) {
    if (orientation === "horizontal") {
      const coordinateToFindX = `${startY}.${startX + --squaresToMark}`;
      const elementToMark = findElementToMark(gameboard, coordinateToFindX);
      if (elementToMark.containsShip) {
        anyFalse = true;
        break;
      }
      elementToMark.containsShip = ship.id;
    }
    if (orientation === "vertical") {
      const coordinateToFindY = `${startY + --squaresToMark}.${startX}`;
      const elementToMark = findElementToMark(gameboard, coordinateToFindY);
      if (elementToMark.containsShip) {
        anyFalse = true;
        break;
      }
      elementToMark.containsShip = ship.id;
    }
  }
  if (anyFalse) return false;
  return gameboard;
};

export { placeShip };
