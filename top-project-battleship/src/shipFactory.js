const shipArrayPlayer1 = [];
const shipArrayPlayer2 = [];
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
  if (player === 1) shipArrayPlayer1.push(ship);
  if (player === 2) shipArrayPlayer2.push(ship);
  return ship;
};

export { shipFactory, shipArrayPlayer1, shipArrayPlayer2 };
