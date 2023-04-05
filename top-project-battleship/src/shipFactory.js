const shipFactory = (length, hits, sunk) => {
  return {
    length: length,
    hits: hits,
    sunk: sunk,
  };
};

export { shipFactory };
