// const eqArrays = function(firstArray, secondArray) {
//   let condition = true;
//   if (firstArray.length !== secondArray.length) {
//     condition = false;
//   } else {
//     for (let i = 0; i < firstArray.length; i++) {
//       if (firstArray[i] !== secondArray[i]) {
//         condition = false;
//       } 
//     }
//   }
//   return condition;
// };

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2)
  if (result) {
    console.log(`😍Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👿Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual([1, 3, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 'lki'], [1, 2, 3]);
// assertArraysEqual([1], [1, 2, 3]);
