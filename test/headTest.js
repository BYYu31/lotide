const _ = require('../index');

// const assertEqual = require('../assertEqual');
const { assert } = require('chai');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([9927]), 9927);
// assertEqual(head([]), undefined);

describe('#head', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(_.head(['5']), '5');
  });
  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5);
  });
  it("returns '5' for ['Hello', 'Lighthouse', 'Labs]", () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 9927 for [9927]", () => {
    assert.strictEqual(_.head([9927]), 9927);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(_.head([]), undefined);
  });
});