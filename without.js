//assertion
const assertArraysEqual = require('./assertArraysEqual');

//WITHOUT FUNCTION
const without = function(sourceArray, itemsToRemove) {
  let finalArray = [];
  for (let item of sourceArray) {
    if (!itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  return finalArray;
};

//EXPORT MODULE
module.exports = without;

//TEST
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, ,2, '3']), ['1', '2']);
assertArraysEqual(without(['2', '2', '3'], [1, ,2, '3']), ['2', '2']);
assertArraysEqual(without([1, '2', '3'], [1, ,2, '3']), ['2']);
assertArraysEqual(without(['1', '2', '3'], [1, ,2, '3', '2']), ['1']);

