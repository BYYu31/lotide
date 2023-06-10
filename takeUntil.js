//assertion
const assertArraysEqual = require('./assertArraysEqual');

//data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

//TAKEUNTIL FUNCTION
const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (!callback(i)) {
      result.push(i);
    } else {
      break;
    }
  }
  return result;
};

//EXPORT MODULE
module.exports = takeUntil;

//TEST
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual((results1), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual((results2), ["I've", 'been', 'to', 'Hollywood']);