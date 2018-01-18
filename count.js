function duckCount() {
  if(arguments.length <= 0){
    return 0
  }
  let remainingArgs = Array.prototype.slice.call(arguments, 1)
  let thisArg = Object.prototype.hasOwnProperty.call(arguments[0], "quack") ? 1 : 0
  return thisArg + duckCount.apply(null, remainingArgs )

}

module.exports = duckCount //eslint-disable-line

console.log("passing nothing", duckCount() === 0) //eslint-disable-line
console.log("passing 1 argument as quack", duckCount({quack: true}) === 1) //eslint-disable-line
console.log("passing 1 argument duck using Object.create", duckCount(Object.create({quack: true})) === 0) //eslint-disable-line
console.log("passing 2 args with none of them quack", duckCount(Object.create({duck: true}), {duck: 1}) === 0) //eslint-disable-line
console.log("passing 2 args with 1 of them quack", duckCount(Object.create({duck: true}), {quack: 1}) === 1) //eslint-disable-line
console.log("passing 2 args with 1 of them quack and 1 not", duckCount(Object.create({Quack: true}), {quack: 1}) === 1) //eslint-disable-line
console.log("passing 2 args with all of them quack", duckCount({quack: 2}, {quack: 1}) === 2) //eslint-disable-line
console.log("passing 2 args with all of them quack, one using Object.create", duckCount(Object.create({quack: true}), {quack: 1}) === 1) //eslint-disable-line
