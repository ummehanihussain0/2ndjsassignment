/////<--- question 11--->/////

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  let result = num1 + num2;
  alert(`${num1} + ${num2} = ${result}`);
} else if (operation === "-") {
  let result = num1 - num2;
  alert(`${num1} - ${num2} = ${result}`);
} else if (operation === "*") {
  let result = num1 * num2;
  alert(`${num1} * ${num2} = ${result}`);
} else if (operation === "/") {
  let result = num1 / num2;
  alert(`${num1} / ${num2} = ${result}`);
} else if (operation === "%") {
  let result = num1 % num2;
  alert(`${num1} % ${num2} = ${result}`);
} else {
  alert("Invalid operation");
}
