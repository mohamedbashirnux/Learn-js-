// Discount project

let age = Number(prompt("Enter your age?"));
let membership = prompt("Are you a member? yes/no");
let cart = Number(prompt("Enter total cart amount"));

let discount = age >= 18 && membership === "yes" && cart > 100 ? cart * 0.20 : 0;
let finalPrice = cart - discount;

alert("Original: " + cart + ", Discount: " + discount + ", Final price: " + finalPrice);