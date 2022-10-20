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
    console.log(`Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let letter in sentence) {
    let number = sentence[letter];
    if (number === " ") {
      continue;
    }

    if (results[number] === undefined) {
      results[number] = [];
    }

    results[number].push(Number(letter));
  }
  return results;
};

assertArrayEqual(letterPositions("lighthouse in the house").i, [1, 11]);