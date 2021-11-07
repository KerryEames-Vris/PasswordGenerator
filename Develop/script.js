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
  var passwordLength = prompt("Please specify password length, between 8 and 128:", "Enter Password Length");
  if(passwordLength < 8 && passwordLength < 128){
    alert("Please choose an option between 8 and 128!")
    generatePassword();
  } else {
    var lowerAlpha = confirm("Would you like to use lowercase letters?")
  };
  var upperAlpha = confirm("Would you like to use uppercase letters?");
  var wantNumbers = confirm("Would you like to use numbers?");
  var wantSymbols = confirm("Would you like to use symbols?");
}
 



//prompt user for length
// error handling - did they enter a valid number

// prompt use to confirm all character selections
// error handling - did the user select at least one option

//use inputs to generate password
// return the password form the generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
