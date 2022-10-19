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
    return "Pass";
  } else {
    return "Fail";
  }
};

const without = function(firstArray, itemsToRemoveArray) {
  const result = []; // empty array
  // go through each number in the first array
  for (let i = 0; i < firstArray.length; i++) {  
    // go through the second Array
      // compare the number in the second array to the first one
      if (!itemsToRemoveArray.includes(firstArray[i])) {
        result.push(firstArray[i]);
      }
    }
  return result;
};

console.log(assertArrayEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);