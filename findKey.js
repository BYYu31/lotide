// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😍Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👿Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKey = function(object, callback) {
  let result = undefined;
  for (let i in object) {
    if (callback(object[i])) {
      result = i;
      break;
    }
  }
  return result;
};

module.exports = findKey;


// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 4), undefined) // => "noma"