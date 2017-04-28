'use strict';

// arr.forEach(function callback(currentValue, index, array) {
    //your iterator
// }[, thisArg]);

//o(n) run time forEach
List.prototype.forEach = function(func, context) {
    let value;
    context = context || this;  //apply the function to 'this' by default
    for (key in this) {
        if (this.hasOwnProperty(key)) {  //to rule out inherited properties
            value = this[key];
            func.call(context, key, value);
        }
    }
};

//O(n) run time filter
List.prototype.filter = function(func) {
  let len = this.length >>> 0;
  if (typeof func != 'function')
    throw new TypeError();

  let res = [];
  let thisp = arguments[1];
  for (var i = 0; i < len; i++) {
    if (i in this) {
      let val = this[i]; // in case fun mutates this
      if (func.call(thisp, val, i, this))
        res.push(val);
    }
  }
  return res;
};

//O(n) run time map
List.prototype.map = function(callback) {
  let T, a, k;
  let O = Object(this);
  let len = O.length >>> 0;

  if(typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  if(arguments.length > 1) {
    T = arguments[1];
  }
  A = new Array(len);
  k=0;
  while(k < len){
    let kValue = O[k];
    mappedValue = callback.call(T, kValue, k, O);
    A[k] = mappedValue;
  }
}
