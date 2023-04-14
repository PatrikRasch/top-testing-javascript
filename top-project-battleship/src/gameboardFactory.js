const gameboardFactory = (squares) => {
  const gameboardArray = Array.from({ length: squares * squares }, (_, index) => {
    const row = Math.floor(index / squares);
    const column = index % squares;
    return { coord: `${row}.${column}`, containsShip: false, cellHit: false };
  });

  return gameboardArray;
};

export { gameboardFactory };
