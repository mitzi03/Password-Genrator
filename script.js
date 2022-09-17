var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
 
passwordText.value = password



//add function to generatepassword, has to have return value for password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
