const assertEqual = require('./assertEqual')


const tail = function(myArray) {
  return myArray.slice(1);
};

module.exports = tail;