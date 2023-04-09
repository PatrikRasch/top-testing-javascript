const allShipsSunk = (gameboard) => {
  return gameboard.every((element) => {
    return (
      (element.containsShip !== false && element.cellHit === true) ||
      (element.containsShip === false && element.cellHit === false)
    );
  });
};

export { allShipsSunk };
