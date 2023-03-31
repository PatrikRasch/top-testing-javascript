import { analyzeArray } from "./analyzeArray.js";

const arr = [3, 1, 7, 9, 20];

test("An average object key-value pair is included in the analysis", () => {
  expect(analyzeArray(arr)).toMatchObject({ average: 8 });
});

test("The smallest value is represented as a key-value pair", () => {
  expect(analyzeArray(arr)).toMatchObject({ min: 1 });
});

test("The greatest value is represented as a key-value pair", () => {
  expect(analyzeArray(arr)).toMatchObject({ max: 20 });
});

test("The length of the array is represented as a key-value pair", () => {
  expect(analyzeArray(arr)).toMatchObject({ length: 5 });
});
