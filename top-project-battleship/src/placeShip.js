const findElementToMark = (gameboard, coord) => {
  return gameboard.find((element) => element.coord === coord);
};

const placeShip = (ship, gameboard, coord, orientation) => {
  if (orientation !== "horizontal" && orientation !== "vertical") {
    return undefined; // If orientation error
  }
  const [startY, startX] = coord.split(".").map(Number); // Make the coordinates into numbers in an array
  let squaresToMark = ship.length; // Define how many squares are to be taken up by the ship

  let squaresToBeMarked = [];
  let anyFalse = false;

  for (let i = 0; i < squaresToMark; i) {
    if (orientation === "horizontal") {
      const coordinateToFindX = `${startY}.${startX + --squaresToMark}`;
      const elementToMark = findElementToMark(gameboard, coordinateToFindX);
      squaresToBeMarked.push(elementToMark);
    }
    if (orientation === "vertical") {
      const coordinateToFindY = `${startY + --squaresToMark}.${startX}`;
      const elementToMark = findElementToMark(gameboard, coordinateToFindY);
      squaresToBeMarked.push(elementToMark);
    }
  }

  squaresToBeMarked.forEach((cell) => {
    if (cell.containsShip) anyFalse = true;
  });

  if (anyFalse === true) return false;

  squaresToBeMarked.forEach((cell) => {
    cell.containsShip = ship.id;
  });
  return gameboard;
};

export { placeShip };
