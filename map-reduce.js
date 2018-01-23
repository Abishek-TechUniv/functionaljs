module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (acc, val) {
    acc.push(fn.call(null, val))
    return acc
  }, [])
}
// console.log(arrayMap([1,2,3],function(x){return x*2}))
console.log("the function should be called as many times as the length of array", false)
console.log("the function should return a list of length equal to the input list length", false)
console.log("the value of an element in output should be equal to the function applied to same indexed element of input", false)