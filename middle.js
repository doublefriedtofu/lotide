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


module.exports = middle;