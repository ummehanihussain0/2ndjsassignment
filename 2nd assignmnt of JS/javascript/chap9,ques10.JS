// ///<--- question 10-->/////

let temperature = prompt("Enter the temperature in Celsius:");
temperature = parseInt(temperature);

if (temperature > 40) {
alert("It is too hot outside.");
} else if (temperature > 30) {
 alert("The Weather today is Normal.");
} else if (temperature > 20) {
alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
 alert("Enter a valid temperature.");
}

