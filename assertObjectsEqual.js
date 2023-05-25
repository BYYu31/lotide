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
  let condition;
  if (Object.keys(actual).length === Object.keys(expected).length) {
    for (const key in actual) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        condition = eqArrays(actual[key], expected[key]);
      } else if (actual[key] === expected[key]){
        condition = true;
      } else {
        return false;
      }
    }
  } else {
    condition = false;
  }
  return condition;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual,expected)
  if (result) {
    console.log(`😍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👿Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

obj1 = {
  a: '1',
  b: '2',
  c: '99'
}

obj2 = {
  a: '1',
  c: '99',
  b: '2'
}

assertObjectsEqual(obj1, obj2);