module.exports = function(namespace) { // eslint-disable-line
  return console.log.bind(global, namespace)
}

// console.log("logger should return a function", false)
// console.log("If logger is passed 'INFO' the output should have prefix 'INFO'", false)
// console.log("If logger is not passed anything the log should be simple log ", false)
// console.log("If logger is not passed a valid argument the log should fail", false)