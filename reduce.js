/* global module:true */

function countWords(inputWords) {
  return inputWords.reduce(function (acc, val) {
    if (val in acc) {
      acc[val]++
    }else {
      acc[val] = 1
    }
    return acc
  } , {})
}

module.exports = countWords
// let res = countWords()
//console.log("empty array", res === null)
// let result = countWords(["Cake", "Cake", "Bake"])
//console.log("array with 2 cakes and 1 bake", result.Cake === 2 && result.Bake === 1)
