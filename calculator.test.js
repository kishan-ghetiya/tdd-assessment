const { add } = require("./calculator");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

test("should return sum of two comma separated numbers", () => {
  expect(add("1,5")).toBe(6);
});
