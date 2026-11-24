// Calculates the price after a discount code is applied.
const DISCOUNTS = { SUMMER10: 0.1, VIP: 0.2 };

function applyDiscount(price, code) {
  const normalized = code?.trim().toUpperCase();
  return price * (1 - (DISCOUNTS[normalized] ?? 0));
}

module.exports = { applyDiscount };
