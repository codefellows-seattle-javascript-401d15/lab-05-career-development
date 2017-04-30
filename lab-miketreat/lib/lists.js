'use strict';

const List = module.exports = function () {
  for (let key in arguments) {
    this[key]= arguments[key];
    // console.log(key);
    // console.log(this[key] = arguments[key]);
  }
  this.length = arguments.length;
};

// O(n) because we are iterating over n items.
List.prototype.copy = function () {
  let result = new List();
  for(let key in this){
    result[key] = this[key];
  }
  return result;
};

// O(n) because we are just assigning the return of this.copy() to result and then adding our new parameter value to the end of that that array.
List.prototype.push = function(value){
  let result = this.copy();
  result[result.length++] = value;
  return result;
};


// O(n) because like in .push we are just assigning the return of this.copy and removing a result from the array.
List.prototype.pop = function(){
  let result = this.copy();
  delete result[--result.length];

  return{
    value: this[this.length - 1],
    list: result,
  };
};

//O(n) because it only iterates over n things in the array
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//O(n^2) Because it has to first find the first arg in the array of arguements, then it has to run through all of the list's properties to look for a match. n should increase expotionally.
List.prototype.filter = function(){
  let args = arguments;
  let results = [];
  for(let key in args){
    this.forEach(function(ele){
      if( args[key] === ele){
        results.push(ele);
      }
    });
  }
  return results;
};

// Big O - This one is a bit confusing because this relies on another unknown function. After reading up there are a lot of formal definitions, but for this class we aren't looking for the formal defs.

//  I belive this is an O(n) as it stands since we are only iterating over one array and apply a function to that iterated item.
List.prototype.map = function(func){
  let results = [];
  this.forEach(function(ele){
    results.push(func(ele));
  });
  return results;
};

// O(n) because we are only iterating over 1 array and just applying a function to it. Nothing is nest, it is linear.
List.prototype.reduce = function(callback, initValue){
  let args = arguments;
  let acc = 0;
  if(args[1]) acc = initValue;
  for(let i = 0; i < this.length; i++) {
    let val = this[i];
    acc = callback(acc, val);
  }
  return acc;
};
