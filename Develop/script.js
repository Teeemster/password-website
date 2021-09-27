// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function writePassword() {
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
  
    //The user will build the array
    else {
      var arrUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      var arrLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      var arrSpecial = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", ",", "-", ".", "/", , ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]
      
      var arrCharacters = []

      if (charUpper) {
        arrCharacters = arrCharacters.concat(arrUpper)
      }
      if (charLower) {
        arrCharacters = arrCharacters.concat(arrLower)
      }
      if (charNumber) {
        arrCharacters = arrCharacters.concat(arrNum)
      }
      if (charSpecial) {
        arrCharacters = arrCharacters.concat(arrSpecial)
      }
      return arrCharacters
    }
  }

  //The user's choices are stored in charOtherFeatures
  var charOtherFeatures = Step2()
  console.log(charOtherFeatures)

  //Loop the length until the desired password is created
  var passwordText = "";

  for (var i = 0; i < charLengthAnswer; i++) {
    passwordText += charOtherFeatures[Math.floor(Math.random() * charOtherFeatures.length)];
  }

  console.log(passwordText)
  return passwordText
}

