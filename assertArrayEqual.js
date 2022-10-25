const eqArrays = require('./eqArrays')

const assertArrayEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${firstArray} !== ${secondArray}`;
  }
};

module.exports = assertArrayEqual;