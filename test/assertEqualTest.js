const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for vitamin D, vitamin D", () => {
    assert.strictEqual("vitamin D", "vitamin D");
  });

  it("returns true for 5, 5", () => {
    assert.strictEqual(5, 5);
  });
});