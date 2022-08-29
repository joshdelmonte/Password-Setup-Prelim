// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("Hello! Would you like to generate a new password?")

    return "<GENERATED PASSWORD>"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);