import { capitalize } from "./capitalize";
const testString = "hello world";

test("Capitalizes first letter of string", () => {
  expect(capitalize(testString)).toMatch("Hello world");
});
