const assertObjectsEqual = require('../assertObjectsEqual');

//TEST CODE - Object Equal
let obj1 = {
  a: '1',
  b: '3',
  c: '99'
};

let obj2 = {
  a: '1',
  c: '99',
  b: '2'
};

assertObjectsEqual(obj1, obj2);
assertObjectsEqual({a: '1', b: '2', c: '99'},{a: '1', b: '2', c: '99'});