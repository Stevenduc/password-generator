document.getElementById("generate").addEventListener("click",function(){
 showPassword("abc")
})
function showPassword(password){
  document.getElementById("password").value = password
}
/*
1. prompt user for password length and validate
  - use the prompt function
2. prompt user if they wanted lowercase character
  - use the confirm function for #2-5
3. prompt user if they wanted uppercase character
4. prompt user if they want special character
5. promp user if they want numbers
6. if they do not answer Yes for any options restart at step 2
  - use a while loop to restart at step 2 until they selected at least one option
7. base on their answer above, create pool of characters they want their password to be created from
8. generate a password by randomly selecting x character
  - use a for loop 
  - use math.random to generate a random index
  - add the character at the random index of the character pool to the password.
*/