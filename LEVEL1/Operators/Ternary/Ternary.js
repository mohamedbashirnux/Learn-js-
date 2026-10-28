// Ternary operator

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// same thing written the long way with if/else:
let result2;
if (age >= 18) {
  result2 = "Adult";
} else {
  result2 = "Minor";
}
console.log(result2); // Adult