const shipArray = [];
let lastId = 1;

const shipFactory = (coord, orientation, length, hits, sunk) => {
  const ship = {
    coord: coord,
    orientation: orientation,
    id: lastId++,
    length: length,
    hits: hits,
    sunk: sunk,
  };
  shipArray.push(ship);
  return ship;
};

export { shipFactory, shipArray };
