// BMI Project

const weight = Number(prompt("Enter your weight in kg:"));
const height = Number(prompt("Enter your height in meters:"));

const bmi = weight / (height * height);

alert("Your BMI is " + bmi.toFixed(1));