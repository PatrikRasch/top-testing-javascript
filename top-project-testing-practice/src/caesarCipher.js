const caesarCipher = (str) => {
  const shiftedCharArr = []; // Initialise array
  const splitString = str.split(""); // Split the argument into an array
  splitString.forEach((char) => {
    // Checks if the character is a regular character or a capital, then shifts it
    if (isLowercaseLetter(char) || isUppercaseLetter(char)) {
      let shiftedCharNum = char.charCodeAt() + 1; // Shifts character forwards by one step
      if (shiftedCharNum === 123) shiftedCharNum = 97; // Wraps z back to a
      if (shiftedCharNum === 91) shiftedCharNum = 65; // Wraps Z back to A
      const shiftedChar = String.fromCharCode(shiftedCharNum);
      shiftedCharArr.push(shiftedChar);
      // If the character is a non-letter, it doesn't get shifted
    } else {
      shiftedCharArr.push(char);
    }
  });
  return shiftedCharArr.join("");
};

const isLowercaseLetter = (char) => {
  if (char.charCodeAt() < 123 && char.charCodeAt() > 96) return true;
};

const isUppercaseLetter = (char) => {
  if (char.charCodeAt() <= 90 && char.charCodeAt() >= 65) return true;
};

caesarCipher("AnalkloEzZ! ouch !! :D");

export { caesarCipher };
