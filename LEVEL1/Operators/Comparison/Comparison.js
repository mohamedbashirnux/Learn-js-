// Comparison operators — full breakdown with names

// == "Equal to" (loose) — checks value only, ignores type
console.log(5 == 5);     // true  - same value
console.log(5 == "5");   // true  - same value, ignores that one is text
console.log(5 == 6);     // false - different value

// === "Strictly equal to" — checks value AND type
console.log(5 === 5);    // true  - same value, same type
console.log(5 === "5");  // false - same value, different type
console.log(5 === 6);    // false - different value

// != "Not equal to" (loose) — opposite of ==
console.log(5 != 6);     // true  - they are different
console.log(5 != "5");   // false - == said equal, so "not equal" is false
console.log(5 != 5);     // false - they are the same

// !== "Strictly not equal to" — opposite of ===
console.log(5 !== 6);    // true  - different value
console.log(5 !== "5");  // true  - different type, even if value looks same
console.log(5 !== 5);    // false - same value, same type

// > "Greater than"
console.log(10 > 5);  // true
console.log(3 > 5);   // false

// < "Less than"
console.log(3 < 5);   // true
console.log(10 < 5);  // false

// >= "Greater than or equal to"
console.log(5 >= 5);  // true - equal counts
console.log(4 >= 5);  // false

// <= "Less than or equal to"
console.log(5 <= 5);  // true - equal counts
console.log(6 <= 5);  // false