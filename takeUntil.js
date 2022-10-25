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

const assertArrayEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

/**
 * Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
 * @param {*} array
 * @param {*} callback
 */

const takeUntil = function(array, callback) {
  const arr = [];

  // go through element object to find element key
  for (const i of array) {
    if (callback(i)) {
      // stops when call back === true
      break;
    } else {
      // insert true value into an array
      arr.push(i);
    }
  }
  return arr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);