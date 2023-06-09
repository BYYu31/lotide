const { assert } = require('chai');
const _ = require('../index');

// console.log(middle([1, 2, 3, 42, 22, 5, 6]));

describe('#middle', () => {
  it('the middle number of this array is', () => {
    assert.deepEqual(_.middle([1, 2, 3, 42, 22, 5, 6]), [42]);
  });
});