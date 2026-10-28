// nested loops example

for (let i = 1; i <= 3; i++) {

    console.log("Outer loop:", i);

    for (let j = 1; j <= 3; j++) {
        console.log("  Inner loop:", j);
    }

}

console.log("Loops finished");

// Output:
// Outer loop: 1
//   Inner loop: 1
//   Inner loop: 2
//   Inner loop: 3
// Outer loop: 2
//   Inner loop: 1
//   Inner loop: 2
//   Inner loop: 3
// Outer loop: 3
//   Inner loop: 1
//   Inner loop: 2
//   Inner loop: 3
// Loops finished
//
// The inner loop runs completely for every round
// of the outer loop.