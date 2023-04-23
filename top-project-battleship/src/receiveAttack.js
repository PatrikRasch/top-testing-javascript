const receiveAttack = (gameboard, coord) => {
  const arrayItem = gameboard.find((element) => element.coord === coord); // Finds the item that matches the hit coordinates
  if (arrayItem.cellHit === true) return false;
  arrayItem.cellHit = true; // Register on the board that it has been hit
  return arrayItem.containsShip; // Returns either false if no ship, or the ship's id
};

// * Must register on the board that the gameboard was hit
// * Option 1: If ship hit, register hit on ship and on board
// * Option 2: If ship not hit, register hit on board

export { receiveAttack };
