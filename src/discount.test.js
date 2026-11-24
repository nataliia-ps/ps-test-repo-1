const { applyDiscount } = require("./discount");

test("SUMMER10 takes 10% off", () => {
  expect(applyDiscount(100, "SUMMER10")).toBe(90);
});
