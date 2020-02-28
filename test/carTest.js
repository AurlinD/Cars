const chai = require("chai"); // 1
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js"); // 2

describe("#shouldBuyCar()", function() {
  // 3

  it("should return false if it's a hatchback", function() {
    // 4
    const car = {
      type: "hatchback"
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return true because car is pink", function() {
    const car = {
      color: "pink",
      type: "sedan",
      price: "3500"
    };
    assert.isTrue(shouldBuyCar(car));
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 5000,
      litresPer100km: 6,
      type: "sedan",
      color: "blue"
    };
    assert.isTrue(shouldBuyCar(car));
  });
});
