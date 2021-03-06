function showPassword(password) {
  document.getElementById("password").value = password

}

// Add event listerner to generate button
document.getElementById("generate").addEventListener("click", generatePassword);

//Arrays of character types
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var otherChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", ",", ".", "/", "<", ">", "?"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//base Array containing al upper and lowercase letters

//function runs as soon as user hits button
function generatePassword() {
  var passValues = []
  var result = ""
  //once Press button, prompt user for password length and validate
  var passwordLength = prompt("Please choose your password length between 8-128 characters long")

  //set range of acceptable password length for responses.
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("PasswordLength must be between 8-128 characters long");
  }

  //prompt for character types: numeric, and/or special characters
  var addLower = confirm("Would you like to include lowercase letters in your password? Hit cancel if No")
  var addUpper = confirm("Would you like to include uppercase letters in your password? Hit cancel if No")
  var addNum = confirm("Would you like to include numbers in your password? Hit cancel if No")
  var addspecialChar = confirm("Would you like to include special characters in your password? Hit cancel if No")
  if (addUpper === false && addLower === false && addNum === false && addspecialChar === false) {
    alert("You have not answer Yes to any options.  Please restart at step 1.")
    return;
  }

  //add numbers and/or special characters into Large Password Array if selected.

  if (addUpper) {
    passValues.push(...upperLetters)
  }
  if (addLower) {
    passValues.push(...lowerLetters)
  }
  if (addNum) {
    passValues.push(...number)
  }
  if (addspecialChar) {
    passValues.push(...otherChar)
  }

  // Use a for loop to randomly select characters for the password
  for (var cycle = 0; cycle < passwordLength; cycle++) {
    var randomIdx = Math.floor(Math.random() * passValues.length)

    var randomCharacter = passValues[randomIdx]

    result = result + randomCharacter
  }


  document.getElementById("password").textContent = result;

}