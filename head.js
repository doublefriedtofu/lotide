const assertEqual = require('./assertEqual')

// Function Implementation
const head = function(myArray) {
  return myArray[0];
};

// // Test Code
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), "Hello");

module.exports = head;