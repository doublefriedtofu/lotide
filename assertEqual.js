// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔴🔴🔴 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code
assertEqual("vitamin D", "vitamin D");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, 5);