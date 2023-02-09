const read = require("./readNumber.js");

test("testBasics", () => {
  expect(read("1")).toBe("11");
});
