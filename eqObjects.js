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

const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length === Object.keys(expected).length) {
    for (const key in actual) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        return eqArrays(actual[key], expected[key])
      }
      if (actual[key] === expected[key]){
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

let result1 = eqObjects(shirtObject, anotherShirtObject);
let result2 = eqObjects(shirtObject, longSleeveShirtObject)

assertEqual(result1, true);
assertEqual(result2, false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);