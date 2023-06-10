//assertion
const assertEqual = require('./assertEqual');

//COUNTLETTERS FUNCTION
const countLetters = function(input) {
  let result = {};
  let noSpaceInput = input.split(' ').join('');
  for (let letter of noSpaceInput) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

//EXPORTS MODULE
module.exports = countLetters;

//TEST
assertEqual(countLetters("lighthouse in the house").h, 4);