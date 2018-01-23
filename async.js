function loadUsers(userIds, load, done) {
  let users = []
  let counter = 0
  userIds.forEach(function(val, index){
    load(val, function(data){
      users[index] = data
      counter += 1
      if (counter === userIds.length)
        return done(users)
    })
  }
  )
}

module.exports = loadUsers