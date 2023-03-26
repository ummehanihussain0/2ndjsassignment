/////////////////QUES 2////////////////////////////////

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
  alert(num1 + " is larger no. than " + num2);
} else if (num2 > num1) {
  alert(num2 + " is larger no. than " + num1);
} else {
  alert("Both integers are equal");
}