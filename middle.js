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

const middle = function(array) {
  let middleArray = [];
  if (array.length < 2) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    middleArray.push(array[(array.length-1)/2]);
    return middleArray
  } else {
    middleArray = array.slice((array.length) / 2 - 1, (array.length) / 2 + 1);
    return middleArray;
  }
}

console.log(middle([1, 2, 3, 42, 22, 5, 6]));