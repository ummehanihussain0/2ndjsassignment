///<--question 3--->////
var color = prompt("Enter the color of the traffic signal:");

if (color === "red") {
  alert("Must stop!");
} else if (color === "yellow") {
 alert("Ready to move!");
} else if (color === "green") {
 alert("Move now!");
} else {
  alert("Invalid color entered.");
}
