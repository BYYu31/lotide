//assertion
const assertEqual = require('./assertEqual');

//HEAD FUNCTION
const head = function(array) {
  return array[0];
};

//EXPORT MODULE
module.exports = head;

// TEST
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9927]), 9927);
assertEqual(head([]), undefined);