const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(aString) {
  let wordCount = {};

  for (let words of aString) {
    if (words === " ") {
      continue; // skips a " "
    }
    if (!wordCount[words]) {
      wordCount[words] = 0; // { key: 0 }
    }
    wordCount[words] ++;
  }
  return wordCount;
};

assertEqual(countLetters("This is a sentence")["T"], 1);