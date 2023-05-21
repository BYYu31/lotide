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


const without = function(sourceArray, itemsToRemove) {
  let finalArray = [];
  for (let item of sourceArray) {
    if (!itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  return finalArray;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, ,2, '3']), ['1', '2']);
assertArraysEqual(without(['2', '2', '3'], [1, ,2, '3']), ['2', '2']);
assertArraysEqual(without([1, '2', '3'], [1, ,2, '3']), ['2']);
assertArraysEqual(without(['1', '2', '3'], [1, ,2, '3', '2']), ['1']);

