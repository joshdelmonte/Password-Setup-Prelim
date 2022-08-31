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

    var numeroNominis = ["1","2","3","4","5","6","7","8","9"];
    var symbolumNominis = ["!","@","#","$","%","&","*"];
    var puerNominis = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var paterNominis = [];

    var optOneiroi = []

    for (var i = 0; i < puerNominis.length; i++){
        paterNominis[i] = puerNominis[i].toUpperCase();

        if (wantedNumbers === true){
            optOneiroi.push(numeroNominis);
        }
        if (wantedSymbols === true){
            optOneiroi.push(symbolumNominis);
        }
    
        if (wantedLowLetters === true){
            optOneiroi.push(puerNominis);
        }
    
        if (wantedUpperChars === true){
            optOneiroi.push(paterNominis);
        }
    
    


}
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
