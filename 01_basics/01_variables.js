const accountId = 15255
let accountEmail = "zahid@gmail.com"
var accountPassword = "12566"
accountCity = "Lahore"

// accountId = 2   // Not Allowed

accountEmail = "hussain@gmail.com"
accountPassword = "256322"
accountCity = "SKG"
let accountState;

// console.log(accountId)

/*
 Prefer not to use Var
 because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])