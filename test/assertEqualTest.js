const assertEqual = require('../assertEqual');

// // TEST CODE - Assert Equal
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('my name is', 'my name is');
// assertEqual('what is my name?', 'what is my name');
// assertEqual(44, 2980);


// TEST CODE - Head.js
console.log('-----------------------------head.js test -----------------------------')
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9927]), 9927);
assertEqual(head([]), undefined);

// TEST CODE - Tail.js
console.log('-----------------------------tail.js test -----------------------------')
const tail = require('../tail');

// Test Case1:
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(result.length, 2); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case2:
const words1 = ["Yo Yo"];
let result1 = tail(words1);
assertEqual(result1.length, 0);
assertEqual(result1[0], undefined);

// Test Case3:
const words2 = ["Yo Yo"];
let result2 = tail(words2);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);