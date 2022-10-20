// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // assign object array into a variable for ease of use and sort at the smae time
  const objectOneKeys = Object.keys(object1).sort();
  const objectTwoKeys = Object.keys(object2).sort();

  // The value for each key in one object is the same as the value for that same key in the other object
  if (objectOneKeys.length === objectTwoKeys.length) { // length match?
    for (let i = 0; i < objectOneKeys.length; i++) { 
      //test if two values match 
        if (object1[objectOneKeys[i]] !== object2[objectTwoKeys[i]]) { 
          return false;
        }
    }
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false