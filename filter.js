/* global module:true */

function getShortMessages(messages) {
  return messages.filter(function(x) { 
    return x.message.length < 50
  }).map(function(x) {
    return x.message
  })
}

module.exports = getShortMessages
//let msg = [{message: "asdfghjklasdfghjklsdfghjkldfghjklsdfghjksdfghjkldfghjkasdfghj"},{message : "as"}, {message: "vc"}]
//console.log("only 2 strings remain : ", getShortMessages(msg).length === 2)

//let msg2 = []
//console.log("empty array", getShortMessages(msg2).length === 0)

//let msg = [{message: "asdfghjklasdfghjklsdfghjkldfghjklsdfghjksdfghjkldfghjkasdfghj"},{message : "as"}]
//console.log("only 2 strings remain : ", "as" in getShortMessages(msg))