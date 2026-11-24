const { applyDiscount } = require("./discount");

test("SUMMER10 takes 10% off", () => {
  expect(applyDiscount(100, "SUMMER10")).toBe(90);
});

test("VIP takes 20% off", () => {
  expect(applyDiscount(100, "VIP")).toBe(80);
});
