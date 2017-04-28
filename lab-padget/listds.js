'use strict';

// A factory function is a pure function that acts like a constructor but without the new keyword.

// TODO: complete the List data structure by adding a pop method.

// Implement forEach() as a method of your List Data Structure.
// Implement filter() as a method of your List Data Structure.
// TODO: implement forEach() and filter() as pure methods on the List prototype; from your whiteboard exercise.

// TODO: implement map() and reduce() as pure methods on the List prototype.

// TODO: in comments above or within each function, note the Big-O runtime.

// Most of our current List implementation will have linear / O(n) runtime.

module.exports = exports = {};

exports.Test = function() {
  let test = 'test';
  // console.log(test);
  return test;
};

// MDN: Array.prototype.forEach()
var a = ['a', 'b', 'c'];

a.forEach(function(element) {
  console.log(element);
});
// a, b, c

// MDN: Array.prototype.filter()
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var longWords = words.filter(function(word){
  return word.length > 6;
});
console.log(longWords);
// Filtered array longWords is ["exuberant", "destruction", "present"]
