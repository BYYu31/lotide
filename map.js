const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(firstArray, secondArray) {
  let condition = true;
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

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2)
  if (result) {
    console.log(`😍Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👿Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const result = [];

  for (let item of array) {
    // console.log('item before: ' + item);
    // console.log('item after: ' + callback(item));
    // console.log('---');
    result.push(item[0]);
  }

  
  return result;
}

const result1 = map(words, word => word[0]);

assertArraysEqual(result1,['g', 'c', 't', 'm', 't']);