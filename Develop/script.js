// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["[", "]", "{", "}", "|", "/", "?", ".", ">", ",", "<", "@", "!", ":", ";", "#", "~", "$", "%", "^", "&", "*", "-", "_", "=", "+"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create generatePassword function
function generatePassword() { 
  var passwordLength = prompt("Please specify password length, between 10 and 120:", "Enter Password Length");
  
} 



//prompt user for length
// error handling - did they enter a valid number

// prompt use to confirm all character selections
// error handling - did the user select at least one option

//use inputs to generate password
// return the password form the generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
