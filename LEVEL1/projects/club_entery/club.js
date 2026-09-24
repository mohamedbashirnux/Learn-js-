// Club entry checker

let age = Number(prompt("Enter your age:"));
let hasID = prompt("Do you have an ID? (yes/no)");

let result = (age >= 18 && hasID === "yes") ? "You can enter the club" : "You cannot enter the club";

alert(result);