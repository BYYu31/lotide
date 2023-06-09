// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let result = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(result.length, 2); // original array should still have 3 elements!
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
const _ = require('../index');
const { assert } = require('chai');


// describe("#tail", () => {
//   // it('tail of this array is ', () => {
//   //   assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 'Labs');
//   // });
// });

describe('#tail', () => {
  it('tail of this ["Yo Yo", "Lighthouse", "Labs"] is ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(_.tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});