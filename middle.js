//MIDDLE FUNCTION
const middle = function(array) {
  let middleArray = [];
  if (array.length < 2) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    middleArray.push(array[(array.length - 1) / 2]);
    return middleArray;
  } else {
    middleArray = array.slice((array.length) / 2 - 1, (array.length) / 2 + 1);
    return middleArray;
  }
};

//EXPORT MODULE
module.exports = middle;