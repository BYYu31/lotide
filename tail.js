// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😍Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👿Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray;
  newArray = array.slice(1);
  return newArray;
};

module.exports = tail;

// // Test Case1:
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let result = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(result.length, 2); // original array should still have 3 elements!
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// // Test Case2:
// const words1 = ["Yo Yo"];
// let result1 = tail(words1);
// assertEqual(result1.length, 0);
// assertEqual(result1[0], undefined);

// // Test Case3:
// const words2 = ["Yo Yo"];
// let result2 = tail(words2);
// assertEqual(result2.length, 0);
// assertEqual(result2[0], undefined);