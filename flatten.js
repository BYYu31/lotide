//assertion
const assertArraysEqual = require('./assertArraysEqual');

//FLATTEN FUNCTION
const flatten = function(nestedArray) {
  let eachIndex;
  let resultArray = [];
  for (eachIndex of nestedArray) {
    if (Array.isArray(eachIndex)) {
      for (let item of eachIndex) {
        resultArray.push(item);
      }
    } else {
      resultArray.push(eachIndex);
    }
  }
  return resultArray;
};

//EXPORT MODULE
module.exports = flatten;

//TEST
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6, 7]])),[1, 2, 3, 4, 5, 6, 7]);