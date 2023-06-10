// FUNCTION IMPLEMENTATION

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😍Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👿Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKeyByValue = function(genreObject, showString) {
  let result;
  let genreKeys = Object.keys(genreObject);
  for (let eachGenre of genreKeys) {
    if (genreObject[eachGenre] === showString) {
      result = eachGenre;
    }
  }
  return result;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);