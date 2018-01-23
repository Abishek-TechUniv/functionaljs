function Spy(target, method) {
  let answer = {count: 0}
  let func = target[method]

  target[method] = function(){
    answer.count += 1
    return func.apply(this, arguments)
  }
  return answer
}

module.exports = Spy


// var spy = Spy(console, "error")

// console.error("calling console.error")
// console.error("calling console.error")
// console.error("calling console.error")

// console.log(spy.count) // 3

console.log("the function should be called properly", false)
console.log("the function should return an object with a count parameter", false)
console.log("the function should return count which is equal to the number of times the method is called", false)