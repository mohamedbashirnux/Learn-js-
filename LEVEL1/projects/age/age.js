// Age Calculator

const Birth_year = Number(prompt("Enter your birth year"));

const Current_year = new Date().getFullYear();

const result = Current_year - Birth_year;

alert("Your age is             " + result );