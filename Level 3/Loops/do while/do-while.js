// do while loop example: the condition is false from the start,
// but the code still runs once

let i = 10; // start: 10 is NOT less than or equal to 5

do {
    console.log("do while ran, i is", i); // runs first, before any check
    i++;                                  // change: add 1 to i
} while (i <= 5);                         // checked AFTER the code: 11 <= 5 is false, so stop

console.log("Loop finished");

// Output:
// do while ran, i is 10
// Loop finished
//
// Try it: change "do {" ... "} while" into a normal
// while (i <= 5) { ... } loop and run it again. Nothing prints inside it,
// because a while loop checks the condition first.