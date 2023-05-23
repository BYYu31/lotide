const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (input) {
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
}

let result = countLetters('lighthouse in the house');

console.log(result);

let answer = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

console.log(answer);

console.log(assertEqual(JSON.stringify(result), JSON.stringify(answer)));

