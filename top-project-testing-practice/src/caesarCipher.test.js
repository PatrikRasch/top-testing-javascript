import { caesarCipher } from "./caesarCipher.js";

const str = "abc";
const strWrap = "xyz";
const strCase = "fGh";
const strPunc = "Hello. It is me, Squidward!";

test("Shifts a string one letter forwards", () => {
  expect(caesarCipher(str)).toMatch("bcd");
});

test("Shifts a string and wraps it back to a when z is reached", () => {
  expect(caesarCipher(strWrap)).toMatch("yza");
});

test("The same case is kept", () => {
  expect(caesarCipher(strCase)).toMatch("gHi");
});

test("Punctuation isn't shifted", () => {
  expect(caesarCipher(strCase)).toMatch("gHi");
});
