////////////////QUES 1////////////////////////

let input = prompt("Enter a Character:");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  alert(input + " is a number");
} else if (ascii >= 65 && ascii <= 90) {
    alert(input + " is an uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
    alert(input + " is a lowercase letter");
} else {
    alert(input + " is not a valid input");
}