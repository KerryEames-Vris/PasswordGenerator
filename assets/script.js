var generateBtn = document.querySelector("#generate");

//Variables to appear in password
var lowerCase = ["a" + "b" + "c" + "d" + "e" + "f" + "g" + "h" + "i" + "j" + "k" + "l" + "m" + "n" + "o" + "p" + "q" + "r" + "s" + "t" + "u" + "v" + "w" + "x" + "y" + "z"];
var upperCase = ["A" + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I" + "J" + "K" + "L" + "M" + "N" + "O" + "P" + "Q" + "R" + "S" + "T" + "U" + "V" + "W" + "X" + "Y" + "Z"];
var numbers = [0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9];
var symbols = ["[" + "]" + "{" + "}" + "|" + "/" + "?" + "." + ">" + "," + "<" + "@" + "!" + ":" + ";" + "#" + "~" + "$" + "%" + "^" + "&" + "*" + "-" + "_" + "=" + "+"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create generatePassword function
function generatePassword() {
  //prompt user for length
  var passwordLength = prompt("Please specify password length, between 8 and 128:", "Enter Password Length");
  Number(passwordLength)
  //I ran out of time to figure out how to make this reject anything that wasnt a number, and I tried for a while.
  if(passwordLength < 8 || passwordLength > 128 || passwordLength === false){
    // error handling 
    alert("Please choose an option between 8 and 128!")
    generatePassword();
  } else {
    // prompt user to confirm all character selections
  var lowerAlpha = confirm("Would you like to use lowercase letters?");
  }; 
  if(lowerAlpha === true || lowerAlpha === false){
     var upperAlpha = confirm("Would you like to use uppercase letters?");
  };
  if(upperAlpha === true || upperAlpha === false){
var wantNumbers = confirm("Would you like to use numbers?");
  };
  if(wantNumbers === true || wantNumbers === false){
var wantSymbols = confirm("Would you like to use symbols?");
  };
  if(wantSymbols === true || wantSymbols === false){
 return newPassword();
  };
 
  
  
  function newPassword() {
    // if all are true
   if(lowerAlpha === true && upperAlpha === true && wantNumbers === true && wantSymbols === true){
    var result = '';
    var characters = lowerCase + upperCase + numbers + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   } //No Lower
   return result;
}else if(lowerAlpha !== true && upperAlpha === true && wantNumbers === true && wantSymbols === true){
    var result = '';
    var characters = upperCase + numbers + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}  //No Upper
else if(lowerAlpha === true && upperAlpha !== true && wantNumbers === true && wantSymbols === true){
    var result = '';
    var characters = lowerCase + numbers + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  } //No Lower/Upper
  else if(lowerAlpha !== true && upperAlpha !== true && wantNumbers === true && wantSymbols === true){
    var result = '';
    var characters = numbers + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  } //No Numbers
  else if(lowerAlpha === true && upperAlpha === true && wantNumbers !== true && wantSymbols === true){
    var result = '';
    var characters = lowerCase + upperCase + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  } //No Upper/Numbers
  else if(lowerAlpha === true && upperAlpha !== true && wantNumbers !== true && wantSymbols === true){
    var result = '';
    var characters = lowerCase + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Lower/Numbers
  else if(lowerAlpha !== true && upperAlpha === true && wantNumbers !== true && wantSymbols === true){
    var result = '';
    var characters = upperCase + symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Lower/Upper/Numbers
  else if(lowerAlpha !== true && upperAlpha !== true && wantNumbers !== true && wantSymbols === true){
    var result = '';
    var characters = symbols;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  } //No Symbols
  else if(lowerAlpha === true && upperAlpha === true && wantNumbers === true && wantSymbols !== true){
    var result = '';
    var characters = lowerCase + upperCase + numbers;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Numbers/Symbols
  else if(lowerAlpha === true && upperAlpha === true && wantNumbers !== true && wantSymbols !== true){
    var result = '';
    var characters = lowerCase + upperCase;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Upper/Symbols
  else if(lowerAlpha === true && upperAlpha !== true && wantNumbers === true && wantSymbols !== true){
    var result = '';
    var characters = lowerCase + numbers;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  } //No Lower/Symbols
  else if(lowerAlpha !== true && upperAlpha === true && wantNumbers === true && wantSymbols !== true){
    var result = '';
    var characters = upperCase + numbers;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Lower/Upper/Symbols
  else if(lowerAlpha !== true && upperAlpha !== true && wantNumbers === true && wantSymbols !== true){
    var result = '';
    var characters = numbers;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Lower/Numbers/Symbols
  else if(lowerAlpha !== true && upperAlpha === true && wantNumbers !== true && wantSymbols !== true){
    var result = '';
    var characters = upperCase;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }//No Upper/Numbers/Symbols
  else if(lowerAlpha === true && upperAlpha !== true && wantNumbers !== true && wantSymbols !== true){
    var result = '';
    var characters = lowerCase;
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  } //Error handling
  else if(lowerAlpha !== true && upperAlpha !== true && wantNumbers !== true && wantSymbols !== true){
    alert("You must choose at least one group of symbols to be included in your password!")
    generatePassword();
  }
  }
}



//use inputs to generate password
 




// error handling - did the user select at least one option


// return the password form the generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
