'use strict';

const List = module.exports = function(){
  for(let key in arguments){
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};


List.prototype.copy = function(){
  let result = new List();
  for(let key in this){
    result[key] = this[key];
  }
  return result;
};

// let cpNums = nums.copy();
// console.log('nums', nums, 'cpNums', cpNums);

List.prototype.push = function(value){
  let result = this.copy;
  result[result.length++] = value;
  return result;
};

List.prototype.pop = function(){
  let result = this.copy;
  delete result[--result.length];
  return {
    value: this[this.length - 1],
    list: result,
  };
};

List.prototype.forEachTest = function(callback){
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let nums = new List(1,2,3,5);
console.log('nums', nums);

function incEle(ele){
  console.log(ele += 1);
  return ele += 1;
}

let newNums = nums.forEachTest(incEle);
console.log(newNums, nums);
//
// nums.forEach(incEle);
// console.log('nums', nums);







List.prototype.filter = function(callback){
  let result = this.copy(); //create copy of array filter method called on
  // if (thisArg) result = thisArg.copy; //have this point to theArg
  for(let i = 0; i < this.length; i++){
    // callback(this[i], i, this);
    result.push(callback(this[i], i, this));
  }
  return result;
};


List.prototype.map = function(){

};

List.prototype.reduce = function(){

};


// let fltNums = nums.filter(function(v){
//   return v < 3;
// });
// console.log('filtered', fltNums, 'nums', nums);
