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

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArrayEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", 3]));