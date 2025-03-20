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

test("should return sum of multiple comma separated numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("should handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
