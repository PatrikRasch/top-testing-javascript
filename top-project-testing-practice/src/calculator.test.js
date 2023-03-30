import { add, subtract, divide, multiply } from "./calculator.js";

test("Adds two numbers together", () => {
  expect(add(1, 2)).toBe(3);
});

test("Subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("Divides two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("Multiplies two numbers", () => {
  expect(multiply(10, 2)).toBe(20);
});
