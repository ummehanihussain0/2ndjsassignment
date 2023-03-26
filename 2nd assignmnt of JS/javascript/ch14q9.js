// Initialize an array with color names
var colors = ["red", "green", "blue"];

// Display the array elements in the browser
document.write("Original array: " + colors + "<br>");

// Ask the user what color he/she wants to add to the beginning
var colorToAdd = prompt("Enter a color to add to the beginning:");

// Add the color to the beginning of the array
colors.unshift(colorToAdd);

// Display the updated array in the browser
document.write("After adding to the beginning: " + colors + "<br>");

// Ask the user what color he/she wants to add to the end
colorToAdd = prompt("Enter a color to add to the end:");

// Add the color to the end of the array
colors.push(colorToAdd);

// Display the updated array in the browser
document.write("After adding to the end: " + colors + "<br>");

// Add two more colors to the beginning of the array
colors.unshift("purple", "pink");

// Display the updated array in the browser
document.write("After adding two more colors to the beginning: " + colors + "<br>");

// Delete the first color in the array
colors.shift();

// Display the updated array in the browser
document.write("After deleting the first color: " + colors + "<br>");

// Delete the last color in the array
colors.pop();

// Display the updated array in the browser
document.write("After deleting the last color: " + colors + "<br>");

// Ask the user at which index he/she wants to add a color & color name
var indexToAdd = prompt("Enter the index at which you want to add the color:");
colorToAdd = prompt("Enter a color to add at the index:");

// Add the color to the desired position/index
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array in the browser
document.write("After adding a color at index " + indexToAdd + ": " + colors + "<br>");

// Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
var indexToRemove = prompt("Enter the index from where you want to remove the color(s):");
var countToRemove = prompt("Enter the number of colors you want to remove:");

// Remove the same number of color(s) from user-defined position/index
colors.splice(indexToRemove, countToRemove);

// Display the updated array in the browser
document.write("After removing " + countToRemove + " colors from index " + indexToRemove + ": " + colors + "<br>");
