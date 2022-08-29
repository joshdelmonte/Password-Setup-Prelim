
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// prompt user for new password for yes or no
   var starterQuery = window.confirm("Would you like us to generate a  unique password? ")
   console.log(starterQuery)    

   var numberInput = window.prompt("How many characters would you like your password to be?")

   var passwordLength = parseInt(numberInput)

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8-128 characters.")
        return
    }
// added after realizing people will be people
    if (isNaN(passwordLength) {
         window.alert("Invalid input. Please enter a numerical value between 8-128.")
        return
    }
// query user if they want numbers, symbols, letters, and speciale characteurs
    var wantedNumbers = window.confirm("Would you like numbers in your new password?")
    var wantedSymbols = window.confirm("Care for any unique characters in your new password?")
    var wantedLowLetters = window.confirm("Would you like lower case letters in your new password?")
    var wantedUpperChars = window.confirm("Would you like to add upper cased letters to further enhance your new password?")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);