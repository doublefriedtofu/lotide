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

const assertArrayEqual = function(firstArray, expectedArray) {
  if (eqArrays(firstArray, expectedArray)) {
    return `Assertion Passed: ${firstArray}`;
  } else {
    return `Assertion Failed: ${firstArray}`;
  }
};

const middle = function(arr) {
  const middleNumber = [];
  //if array.length is less than 2, return empty array
  if (arr.length <= 2) {
    middleNumber;

    //if array.length is odd number, return the middle index array
  } else if (arr.length % 2 !== 0) {
    middleNumber.push(arr[Math.floor(arr.length / 2)]);

    //if array.length is an even number, return the middle two index array
  } else if (arr.length % 2 === 0) {
    middleNumber.push(arr[Math.floor(arr.length / 2) - 1], arr[Math.floor(arr.length / 2)]);
  }
  return middleNumber;
};


console.log(assertArrayEqual(middle([1]), [])); // => []
console.log(assertArrayEqual(middle([1, 2]), [])); // => []

console.log(assertArrayEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]

console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]