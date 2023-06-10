const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let objKey1 = Object.keys(object1);
  let objKey2 = Object.keys(object2);
  
  if (objKey1.length !== objKey2.length) {
    return false;
  } else {
    let condition = false;
    for (let key of objKey1) {
      if (object1[key].length > 1) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      } else {
        condition = true;
      }
    }
    return condition;
  }
};

module.exports = eqObjects;