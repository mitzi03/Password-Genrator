var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

function generatePassword() 
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength= 128;
    var passwords="";
  
    for( var i = 0 ; i<= passwordLength ; i++) {
      var password = Math.floor(Math.random() * chars.length);
      passwords += chars.substring(randomnumber,randomnumber +1);
    return password
    }
}
  
passwordText.value = password



//add function to generatepassword, has to have return value for password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
