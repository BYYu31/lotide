const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE - Array Equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays([1], [1, 4, "3"]), false);