// Calculates the price after a discount code is applied.
function applyDiscount(price, code) {
  if (code == "SUMMER10") {
    return price - price * 0.1;
  }
  if (code == "VIP") {
    return price * 0.8;
  }
  return price;
}

module.exports = { applyDiscount };
