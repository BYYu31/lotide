//assertion
const assertEqual = require('./assertEqual');

//FINDKEYBYVALUE FUNCTION
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

//EXPORT MODULE
module.exports = findKeyByValue;

//TEST
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);