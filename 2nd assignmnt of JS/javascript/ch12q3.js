//////////////////QUES 3///////////////////////////////

var input = prompt("Enter a character:");
var isVowel = false;

if (input.length == 1) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
    if (input.toLowerCase() == vowels[i]) {
      isVowel = true;
      break;
    }
  }
}

if (isVowel) {
  alert(input + " is a vowel.");
} else {
  alert(input + " is not a vowel.");
}
