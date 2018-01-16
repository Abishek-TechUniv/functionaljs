/*global module:true*/

function upperCaser(input) {
  return input.toUpperCase()
}


//console.log("changes hello to HELLO : ", upperCaser("hello") === "HELLO")
//console.log("keeps HELLO as HELLO : ", upperCaser("HELLO") === "HELLO")
//console.log("correctly change a mixed input : ", upperCaser("1sdA") === "1SDA")
//

module.exports = upperCaser
