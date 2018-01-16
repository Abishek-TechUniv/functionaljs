/*global module:true*/

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

//console.log("array with 2 cakes and 1 bake", countWords(["Cake", "Cake", "Bake"]).Cake === 2)
