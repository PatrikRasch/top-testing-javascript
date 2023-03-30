const greetWorld = "hello world";

const reverseString = (str) => {
  const characters = str.split("");
  const reversedCharacters = characters.reverse();
  const reversedStr = reversedCharacters.join("");
  return reversedStr;
};

reverseString(greetWorld);

export { reverseString };
