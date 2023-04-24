const isSunk = (ship) => {
  if (ship.hits === ship.length) {
    ship.sunk = true;
    return true;
  }
};

export { isSunk };
