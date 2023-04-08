const shipArray = [];
let lastId = 1;

const shipFactory = (length, hits, sunk) => {
  const ship = {
    id: lastId++,
    length: length,
    hits: hits,
    sunk: sunk,
    coord: "",
    orientation: "",
  };
  shipArray.push(ship);
  return ship;
};

export { shipFactory, shipArray };
