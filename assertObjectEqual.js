// Function Implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(object1, object2) {
  // assign object array into a variable for ease of use and sort at the smae time
  const objectOneKeys = Object.keys(object1).sort();
  const objectTwoKeys = Object.keys(object2).sort();

  // The value for each key in one object is the same as the value for that same key in the other object
  if (objectOneKeys.length === objectTwoKeys.length) { // length match?
    for (let i = 0; i < objectOneKeys.length; i++) {
      // test if object1 and object 2 is an array.
      if (Array.isArray(object1[objectOneKeys[i]]) && Array.isArray(object2[objectTwoKeys[i]])) {
        // if it's an array, run eqArrays function to test if two arrays are equal.
        const isArrayEqual = eqArrays(object1[objectOneKeys[i]], object2[objectTwoKeys[i]]);
        // if arrays are equal, return true otherwise return false.
        if (isArrayEqual === false) {
          return false;
        }
        // if object1 and object2 isn't an array, run the following code to see if they match
      } else if (object1[objectOneKeys[i]] !== object2[objectTwoKeys[i]]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

const cd3 = {  c: "1", d: [3, "2"] };
assertObjectsEqual(cd, cd3);