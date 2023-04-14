const shipArrayUser1 = [];
const shipArrayUser2 = [];
let lastId = 1;

const shipFactory = (length, hits, sunk, player) => {
  const ship = {
    id: lastId++,
    length: length,
    hits: hits,
    sunk: sunk,
    player: player,
    coord: "",
    orientation: "",
  };
  if (player === 1) shipArrayUser1.push(ship);
  if (player === 2) shipArrayUser2.push(ship);
  return ship;
};

export { shipFactory, shipArrayUser1, shipArrayUser2 };
