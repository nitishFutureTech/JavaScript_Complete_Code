const accountId = 1234567890;
let accountName = "John Doe";
var accountPassword = "12345";
accountCity = "Bangalore"; // Not recommended to declare variables without var, let, or const as it becomes a global variable
let accountCountry;


// accountId = 9876543210; // This will throw an error because accountId is a constant

accountName = "Nitish Kumar";
accountEmail = "nitish@example.com";
accountPassword = "54321";
accountCity = "Uttar Pradesh";


console.log("Account ID:", accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountName, accountEmail, accountPassword, accountCity, accountCountry]);