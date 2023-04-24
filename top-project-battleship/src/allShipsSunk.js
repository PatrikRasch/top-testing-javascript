const allShipsSunk = (gameboard) => {
  return gameboard.every((element) => {
    return (
      // If the element contains a ship && If the element is hit
      (element.containsShip !== false && element.cellHit === true) ||
      // If the element does not contain a ship
      element.containsShip === false
    );
  });
};

export { allShipsSunk };
