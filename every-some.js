/*global module:true*/

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(x) { 
      return goodUsers.some( function(y){
        return x.id === y.id
      })
    })
  }
}

module.exports = checkUsersValid
//

// console.log("empty arrays : ", (checkUsersValid([]))([]) === true)

// let good = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 }
// ]
// let valid = [
//   { id: 1},
//   { id: 2},
//   { id: 3},
//   { id: 4}
// ]

// console.log("some in valid are not in good : ", (checkUsersValid(good))(valid) === false)
// let valid2 = [
//  { id: 1}
//]

//console.log("all in valid are in good : ", (checkUsersValid(good))(valid2) === true)

//console.log("some in valid are not in good : ", (checkUsersValid([]))([]) === true)
