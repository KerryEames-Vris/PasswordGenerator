// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create generatePassword function

//prompt user for length
// error handling - did they enter a valid number

// prompt use to confirm all character selections
// error handling - did the user select at least one option

//use inputs to generate password
// return the password form the generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
