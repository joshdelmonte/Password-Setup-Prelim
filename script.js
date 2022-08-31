// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   
    window.confirm("Would you like us to generate a  unique password? ");
   console.log(window);    
// prompt user for password length
    var numberInput = window.prompt("How many characters would you like your password to be?")
// set perameters for password length
    var passwordLength = parseInt(numberInput)
// query user if they want numbers, symbols, letters, and speciale characteurs
//set values for numbers, symbols, letters, and special chars
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);