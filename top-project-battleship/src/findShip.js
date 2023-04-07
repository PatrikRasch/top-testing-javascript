const findShip = (shipArray, id) => {
  const ship = shipArray.find((element) => element.id === id);
  return ship || false;
};

export { findShip };
