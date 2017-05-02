'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

//O(n)
List.prototype.forEach = function(data){
  for(let i = 0; i < this.length; i++) {
    data(this[i]);
  }
};

//O(n)
List.prototype.copy = function(source) {
  let results = source;
  return results;
};

//O(n)
List.prototype.push = function(value) {
  let result = this.copy(this);
  result[result.length++] = value;
  return result;
};

//O(n)
List.prototype.pop = function() {
  let result = this.copy(this);
  delete result[--result.length];

  return {
    value: this[this.length -1],
    list: result,
  };
};

List.prototype.filter = function(data){
  let results = this.copy(this);
  for(let i = 0; i < this.length; i++){
    if(this[i] === data) results.push(data);
  }
  return results;
};
//O(n)
List.prototype.map = function(callback) {
  let result = this.copy(this);
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    result.push(this[i]);
  }
  return result;
};

List.prototype.reduce = function(callback) {
  let result = 0;
  for (var i = 0; i < this.length; i++) {
    result += this[i];
    callback(this[i], i, this);
  }
  return result;
};
