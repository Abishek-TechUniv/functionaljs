function one() {
  return 1
}


function myfunc(){
  let users = []
  for (let index = 0; index < 5; index++) {
    setTimeout( users.push(one) ) 
  }
  return users
}

console.log(myfunc())