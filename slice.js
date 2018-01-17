let slice = Array.prototype.slice

function logger(namespace) {
  return function(){
    let args = slice.call(arguments)
    args.unshift(namespace)
    console.log.apply(null, args)
  }
}


module.exports = logger

// console.log("If logger is passed 'INFO' the output should have prefix 'INFO'", false)
// console.log("If logger is not passed anything the log should be ", false)
// console.log("If logger is not passed a valid argument the log should fail", false)


// let info = logger("INFO : ")
// info("Abc")