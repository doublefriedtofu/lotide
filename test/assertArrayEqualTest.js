const assert = require('chai').assert;

describe("#assertArrayEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(([1, 2, 3]), [1, 2, 3]);
  });

  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual((["1", "2", "3"]), ["1", "2", "3"]); 
  });

});