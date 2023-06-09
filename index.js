// index.js

const head = require('./head');

const tail = require('./tail');

const middle = require('./middle');

const countLetters = require('./countLetters');

const countOnly = require('./countOnly');

const findKey = require('./findKey');

const letterPositions = require('./letterPositions');

const map = require('./map');

const takeUntil = require('./takeUntil');

const without = require('./without');

const assertArraysEqual = require('./assertArraysEqual');

const assertEqual = require('./assertEqual');

const assertObjectsEqual = require('./assertObjectsEqual');

const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

const flatten = require('./flatten');

const findKeyByValue = require('./findKeyByValue');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  flatten: flatten,
  findKeyByValue: findKeyByValue
};