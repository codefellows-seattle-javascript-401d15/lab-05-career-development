'use strict';

const List = module.exports = function () {
  for (let key in arguments) {
    this[key]= arguments[key];
    console.log(key);
    console.log(this[key] = arguments[key]);
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
