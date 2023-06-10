//TAIL FUNCTION
const tail = function(array) {
  let newArray;
  newArray = array.slice(1);
  return newArray;
};

//EXPORT MODULE
module.exports = tail;
