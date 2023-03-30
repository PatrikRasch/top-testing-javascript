const caesarCipher = (str) => {
  const shiftedCharArr = []; // Initialise array
  const splitString = str.split(""); //
  splitString.forEach((char) => {
    let shiftedCharNum = char.charCodeAt() + 1;
    if (shiftedCharNum >= 123) shiftedCharNum -= 26;
    const shiftedChar = String.fromCharCode(shiftedCharNum);
    shiftedCharArr.push(shiftedChar);
  });
  const shiftedStr = shiftedCharArr.join("");
  console.log(shiftedStr);
  return shiftedStr;
};

caesarCipher("abc");
caesarCipher("xyz");
caesarCipher("Hello. It is me, Squidward!");

export { caesarCipher };
