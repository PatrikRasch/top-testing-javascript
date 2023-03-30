import { reverseString } from "./reverseString.js";

const str = "hello world";

test("Reverses the string", () => {
  expect(reverseString(str)).toMatch("dlrow olleh");
});
