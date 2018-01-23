function curryN(fn, n) {
  if (typeof n !== "number") n = fn.length

  function curry(val) {
    return function(args) {
      let arg = val.concat(args)
      if (arg.length < n) return curry(arg)
      return fn.apply(this, arg)
    }
  }

  return curry([])
}

module.exports = curryN

// curryc = curryN(add3)
// curryb = curryc(1)
