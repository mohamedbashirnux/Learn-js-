// Logical operators — more examples

// && (AND) — needs BOTH sides true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

let age = 20;
let hasTicket = true;
console.log(age >= 18 && hasTicket); // true - both conditions are true

// || (OR) — needs AT LEAST ONE side true
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

let hasCash = false;
let hasCard = true;
console.log(hasCash || hasCard); // true - card alone is enough

// ! (NOT) — flips true to false, or false to true
console.log(!true);  // false
console.log(!false); // true

let isRaining = false;
console.log(!isRaining); // true - "it's NOT raining" is true