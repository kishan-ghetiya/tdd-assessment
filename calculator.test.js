const { add } = require("./calculator");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return number itself for a single number", () => {
  expect(add("1")).toBe(1);
});
