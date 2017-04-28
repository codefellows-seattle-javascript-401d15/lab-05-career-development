'use strict';

// A factory function is a pure function that acts like a constructor but without the new keyword.

// TODO: complete the List data structure by adding a pop method.

// Implement forEach() as a method of your List Data Structure.
// Implement filter() as a method of your List Data Structure.
// TODO: implement forEach() and filter() as pure methods on the List prototype; from your whiteboard exercise.

// TODO: implement map() and reduce() as pure methods on the List prototype.

// TODO: in comments above or within each function, note the Big-O runtime.

module.exports = exports = {};

// for each goes through each index of the array.
// var arr = ['Index 0', 'Index 1', 'Index 2', 'Index 3'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

exports.Test = function() {
  // we're looping through each index value and logging it.
  let a = ['Index 0', 'Index 1', 'Index 2', 'Index 3'];
  // A for loop will have a linear / O(n) runtime.
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
  return a;
};
exports.Test();

exports.Test2 = function() {
  // mdn: Array.prototype.forEach()
  let b = ['Index 0', 'Index 1', 'Index 2', 'Index 3'];
  // forEach will also have a linear / O(n) runtime.
  b.forEach(function(element) {
    console.log(element);
  });
  return b;
};
exports.Test2();

// test that a = b.

// MDN: Array.prototype.filter()
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// var longWords = words.filter(function(word){
//   return word.length > 6;
// });
// console.log(longWords);
// Filtered array longWords is ["exuberant", "destruction", "present"]

exports.Test = function() {
  let test = 'test';
  // console.log(test);
  return test;
};
