//let counter = 0
//let counter2 = 1

function repeat(operation, num) {
  if (num === 0) return
  operation.call()
  repeat(operation, --num)
}

// Do not remove the line below
module.exports = repeat
//repeat(function() { counter++}, 3) 
//console.log("repeat function 3 times : ", counter === 3)

//repeat(function() { counter2  *= 2 }, 10)
//console.log("repeat multiply by 2 ten times : ", counter2 === 1024) 
