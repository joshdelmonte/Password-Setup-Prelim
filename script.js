// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
// prompt user for new password for yes or no
    var starterQuery = window.confirm("Would you like us to generate a  unique password? ");
    console.log(starterQuery);    
// prompt user for password length
    var userInput = window.prompt("How many characters would you like your password to be?");
// set perameters for password length
    var passwordLength = parseInt(userInput);

    if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters.");
    return;
    }
// added after realizing people will be people
    if (isNaN(passwordLength)) {
    window.alert("Invalid input. Please enter a numerical value between 8-128.");
    return;
    }

    var wantedNumbers = window.confirm("Would you like numbers in your new password?");
    var wantedSymbols = window.confirm("Care for any unique characters in your new password?");
    var wantedLowLetters = window.confirm("Would you like lower case letters in your new password?");
    var wantedUpperChars = window.confirm("Would you like to add upper cased letters to further enhance your new password?");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);