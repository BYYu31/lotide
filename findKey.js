//assertion
const assertEqual = require('./assertEqual');

//FINDKEY FUNCTION
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

//EXPORT MODULE
module.exports = findKey;

//TEST
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined); // => "noma"