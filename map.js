function doubleAll(numbers) {
 return numbers.map( x => x * 2)  
}

module.exports = doubleAll


//function equals(firstArray, secondArray){
//  for(let i = 0; i < firstArray.length; i++){
//    if( firstArray[i] !== secondArray[i]) return false
//  }
//  return true
//}
//console.log("double empty array : ", equals(doubleAll([]),[]))
//console.log("double non-empty array : ", equals(doubleAll([1,2,3]),[2,4,6]))
