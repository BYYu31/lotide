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

// const assertArraysEqual = function(array1, array2) {
//   let result = eqArrays(array1,array2)
//   if (result) {
//     console.log(`😍Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`👿Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

const flatten = function(nestedArray) {
  let eachIndex;
  let resultArray = [];
  for (eachIndex of nestedArray) {
    if (Array.isArray(eachIndex)) {
      for (item of eachIndex) {
        resultArray.push(item);
      }
    } else {
      resultArray.push(eachIndex);
    }
  };
  return resultArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6, 7]]));