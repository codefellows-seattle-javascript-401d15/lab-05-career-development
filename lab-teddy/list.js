'use strict';

const List = module.exports = function(){
  for(let key in arguments){
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

List.prototype.copy = function(){
  let results = new List();
  for(let key in this){
    results[key] = this[key];
  }
  return results;
};

List.prototype.awePush = function(value){
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

List.prototype.pop = function(){
  let result = this.copy();
  delete result[--result.length];
  return{
    value: this[this.length -1],
    list: result,
  };
};

List.prototype.aweForEach = function(callback){
  let results = this.copy();
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
  return results;
};

List.prototype.aweFilter = function(callback){
  let results = this.copy();
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)) results.push[i];
  }
  return results;
};

List.prototype.aweMap = function(callback){
  let result = this.copy();
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this);
    result.push[i];
  }
  return result;
};

List.prototype.aweReduce = function(callback){
  let sum = 0;
  for(let i = 0; i < this.length; i++){
    sum += this[i];
    callback(sum, this[i], i, this);
  }
  return sum;
};
