/* global module:true */

function reduce(arr, fn, initial) {
  return (function reducer(index, previous){
    if (arr.length <= index) return previous
    return reducer(index + 1, fn(previous, arr[index], index, arr))
  }(0, initial))
}

module.exports = reduce
//

//console.log("use reduce for summation", reduce([1,2,3], function(i,a) { return i + a } , 0) === 6)
//console.log("use reduce with empty array", reduce([], function(i,a) { return i + a}, 0) === 0)
//console.log("use reduce using index", reduce([1,2,3], function(a, i, ind){ return ((ind % 2 == 0) ? a + i : a )}, 0) == 4)
//console.log("use reduce using array", reduce([1,2,3], function(a, i, ind, arr){ return ((arr.length - ind >= 0) ? a + i : a )}, 0) == 4)