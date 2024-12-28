const accountId = 14432
let accountEmail = "testRiyaz@gmail.com"
var accountPassword = "password"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed
accountEmail = "new@gmail.com"
accountPassword = 12345

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])