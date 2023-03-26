// ///<--- question 6--->/////

var subject1 = prompt("Enter marks obtained in subject 1");
var subject2 = prompt("Enter marks obtained in subject 2");
var subject3 = prompt("Enter marks obtained in subject 3");
var totalMarks = (300);

// Converting the input strings to numbers using the Number() function
var marks1 = Number(subject1);
var marks2 = Number(subject2);
var marks3 = Number(subject3);
var total = Number(totalMarks);

// Calculating the percentage
var percentage = (marks1 + marks2 + marks3) / total * 100;

// Rounding off the percentage to 2 decimal places
percentage = percentage.toFixed(2);

// Calculating the grade and remarks based on percentage
var grade, remarks;

if (percentage >= 80) {
  grade = "A one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage >= 50) {
  grade = "Fail";
  remarks = "Sorry";
} else {
  grade = "N/A";
  remarks = "No remarks";
}

// Displaying the result on the page
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + total + "<br>");
document.write("Marks obtained: " + (marks1 + marks2 + marks3) + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);
