// Comparison operators

let a = 5;
let b = "5";

console.log(a == b);  // true  - loose equal (ignores type, only checks value)
console.log(a === b); // false - strict equal (checks value AND type)
console.log(a != b);  // false - loose not equal
console.log(a !== b); // true  - strict not equal

console.log(a > 3);  // true  - greater than
console.log(a < 3);  // false - less than
console.log(a >= 5); // true  - greater than or equal
console.log(a <= 4); // false - less than or equal