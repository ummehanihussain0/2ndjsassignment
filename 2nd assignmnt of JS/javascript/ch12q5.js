/////////////////QUES 5////////////////////////////////

// store correct password
var correctPassword = "Password123";

// ask user to enter password
var userPassword = prompt("Please enter your password:");

// check if user has entered password
if (userPassword === null || userPassword === "") {
  alert("Please enter your password");
} else {
  // check if both passwords are same
  if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
  } else {
    alert("Incorrect password");
  }
}
