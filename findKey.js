const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
  * Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
  * @param {} object
  * @param {*} callback
  * @returns
  */
const findKey = (object, callback) => {
  // find the first key
  // returns the truthy value
  // if no keys are found, return undefined

  // object into array
  const keys = Object.keys(object);

  // go through element object to find element key
  for (const key of keys) {
    const objValue = object[key];

    if (callback(objValue)) {
      return key;
    }
  }
};


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");