const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    let indexArray = [];
    if (results[char]) {
      indexArray = results[char];
      indexArray.push(i);
      results[char] = indexArray;
    } else {
      indexArray = [i];
      results[char] = indexArray;
    }
    
  }
  return results;
}

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

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2)
  if (result) {
    console.log(`😍Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👿Assertion Failed: ${array1} !== ${array2}`);
  }
};

console.log(assertArraysEqual(letterPositions('hello').l, [2,3]));