const gameboardFactory = (squares) => {
  const gameboardArray = Array.from({ length: squares * squares }, (_, index) => {
    const row = Math.floor(index / squares);
    const column = (index % squares) + 1;
    return { coord: `${row}.${column}`, containsShip: false };
  });

  return gameboardArray;
};

export { gameboardFactory };

// * If ship is placed on board, add key-value pair to board piece
