const eqArrays = require('./eqArrays');

const assertArrayEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArrayEqual;