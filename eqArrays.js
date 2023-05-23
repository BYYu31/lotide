// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let condition = true;
  if (firstArray === undefined || secondArray === undefined) {
    condition = false;
    return condition;
  }
  if (firstArray.length !== secondArray.length) {
    condition = false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        condition = false;
      } 
    }
  }
  return condition;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays([1], [1, 4, "3"]), false);