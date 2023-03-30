const greetWorld = "hello world";

const capitalize = (str) => {
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  return str;
};

capitalize(greetWorld);

export { capitalize };
