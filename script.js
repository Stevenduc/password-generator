document.getElementById("generate").addEventListener("click",function(){
 showPassword("abc")
})
function showPassword(password){
  document.getElementById("password").value = password
}
// Add event listerner to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays of character types
var letters=["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var otherChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", ",", ".", "/", "<", ">", "?"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//base Array containing al upper and lowercase letters
varpassArray = letters

//function runs as soon as user hits button
function generatePassword() {
//once Press button, prompt user for password length and validate
  var passwordLength = prompt ("Please choose your password length between 8-128 characters long")
  console.log(passwordLength)}
//set range of acceptable password length for responses.
  if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("PasswordLength must be between 8-128 characters long");
  }

  //prompt for character types: numeric, and/or special characters
  var addLower =  confirm("Would you like to include lowercase letters in your password?")
  var addLower =  confirm("Would you like to include uppercase letters in your password?")
  var addLower =  confirm("Would you like to include numbers in your password?")
  var addLower =  confirm("Would you like to include special characters in your password?")
  var addLower =  confirm("Would you like to include lowercase letters in your password?")