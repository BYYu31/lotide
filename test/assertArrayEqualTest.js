const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE - Array Equal
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 3, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 'lki'], [1, 2, 3]);
assertArraysEqual([1], [1, 2, 3]);

