// Mini bank project

let age = Number(prompt("Enter your age?"));
let hasBankAccount = prompt("Yes/No");
let pin = Number(prompt("Enter your bin"));
let currentBalace =Number(prompt("Enter your current balance"));
let amountwithdr = Number(prompt("Enter amount you need withdrwal"));

let result = age >= 18 && hasBankAccount === "yes" && pin == 1234 && amountwithdr <= currentBalace ? "sucsess" : "failed"

alert(result)