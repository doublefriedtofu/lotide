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
    return `Assertion Passed: ${firstArray} === ${secondArray}`;
  } else {
    return `Assertion Failed: ${firstArray} !== ${secondArray}`;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const result = map(words, word => word[0]);

console.log(assertArrayEqual(result, [ 'g', 'c', 't', 'm', 't' ]));