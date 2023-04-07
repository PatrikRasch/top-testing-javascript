const receiveAttack = (gameboard, coord) => {
  const arrayItem = gameboard.find((element) => element.coord === coord); // Finds the item that matches the hit coordinates
  return arrayItem.containsShip; // Returns either false if no ship, or the ship's id
};

export { receiveAttack };
