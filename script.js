var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}
// prompts and concerns into a function, returns user input
function userPrompts() {
  var passwordLength= window.prompt(" How long would you like your password to be?");
   if (passwordLength<8){
    alert("wfhwef")
    return
   }
  var lowerCase=window.confirm("Would you like lowercase letters in your password?");
  var upperCase=window.confirm("Would you like uppercase lettersin your password?");
  var numericVal=window.confirm("Would you like Numeric Values?");
  var specialChar=window.confirm("Would you like Special Characters?");

  var userAnswers={
    Length: passwordLength,
    confirmlower:lowerCase,
    confirmupper:upperCase,
    confirmnumeric: numericVal,
    confirmspec:specialChar,

  }
console.log(userAnswers)
return userAnswers;
}


// function to randomize array
function RandomArray(array) {
  var randomindex= Math.floor(Math.random()* array.length)
  var indexval= array[randomindex]
  return indexval
}

// generatepassword function to take in user input random array function and put it all together
// and return a random password string

function generatePassword() {
  var userchoice= userPrompts()
  var possiblechar=[]
  var finalpass=[]


if (userchoice.confirmlower===true) {
    possiblechar=possiblechar.concat(lowerCase)
}
if (userchoice.confirmupper===true) {
  possiblechar=possiblechar.concat(upperCase)
}
if (userchoice.confirmnumeric===true) {
  possiblechar=possiblechar.concat(numericCharacters)
}
if (userchoice.confirmspec===true) {
  possiblechar=possiblechar.concat(specialCharacters)
}

for(var i = 0 ; i <= userchoice.Length ; i++){
  var staged= RandomArray(possiblechar)
  finalpass.push(staged)


}

console.log(finalpass)
return finalpass.join("")

}




//passwordText.value = password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





