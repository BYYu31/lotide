//assertion
const assertArraysEqual = require('./assertArraysEqual');

//MAP FUNCTION
const map = function(array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }
  
  return result;
};

//MODULE EXPORT
module.exports = map;

//TEST
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

assertArraysEqual(map(["m", "n"], i => i + "i"), ["mi", "ni"]);
assertArraysEqual(map([1, 2, 3], num => num * 10), [10, 20, 30]);
assertArraysEqual(map(["wolf", "owl", "worm"], word => word[0].toUpperCase()), ["W", "O", "W"]);