// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Beginning opener
window.alert("Welcome to the Password Generator!");

//Length Function
function Step1() {
  var charLengthFun = window.prompt("Please select a password length between 8 and 128 characters. Please key in a numeric value.");

  //Verify format
  if (charLengthFun < 7 || charLengthFun > 129) {
    window.alert("Please key in a proper value!")
    return Step1()
  }

  //Return value
  else { return charLengthFun }
}

//Attach value to variable
var charLengthAnswer = Step1()

console.log(charLengthAnswer)

//Other Variables Function
function Step2() {
  //Lowercase confirmation
  var charLower = window.confirm("Do you want LOWERcase characters in your password? Please select 'OK' for yes, and 'Cancel' for no.")

  console.log(charLower)

  //Uppercase confirmation
  var charUpper = window.confirm("Do you want UPPERcase characters in your password? Please select 'OK' for yes, and 'Cancel' for no.");

  console.log(charUpper)

  //Numeric confirmation
  var charNumber = window.confirm("Do you want NUMERIC characters in your password? Please select 'OK' for yes, and 'Cancel' for no.");

  console.log(charNumber)

  //Special confirmation
  var charSpecial = window.confirm("Do you want SPECIAL characters in your password? Please select 'OK' for yes, and 'Cancel' for no.");

  console.log(charSpecial)

  //Verify at LEAST one character type was selected
  if (charLower === false && charUpper === false && charNumber === false && charSpecial === false) {
    window.alert("Please choose at least ONE character type.")
    return Step2()
  }
  
  else {return [charLower, charUpper, charNumber, charSpecial]}
}

var charOtherFeatures = Step2()
console.log(charOtherFeatures)

//Random Password Generator
function RandomPassword(charLengthAnswer) {
  if { charOtherFeatures = true, true, true, true}
  elseif { charOtherFeatures = false, true, true, true }
  elseif { charOtherFeatures = false, false, true, true }
  elseif { charOtherFeatures = false, false, false, true }
  elseif { charOtherFeatures = true, false, false, false }
  elseif { charOtherFeatures = true, true, false, false }
  elseif { charOtherFeatures = true, true, true, false }
  elseif { charOtherFeatures = false, true, true, false }
  elseif { charOtherFeatures = false, true, false, false }
  elseif { charOtherFeatures = false, false, true, false }
  elseif { charOtherFeatures = true, false, false, true }
}