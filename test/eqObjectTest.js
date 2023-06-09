const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// TEST CODE - Object Equal

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

let result1 = eqObjects(shirtObject, anotherShirtObject);
let result2 = eqObjects(shirtObject, longSleeveShirtObject)

assertEqual(result1, true);
assertEqual(result2, false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);