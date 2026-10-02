// continue example: skip the loop when i reaches 3

let i = 1;

while (i <= 5) {

    if (i === 3) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}

console.log("Loop finished");

// Output:
// 1
// 2
// 4
// 5
// Loop finished
//
// continue skips the current round when i === 3.
// The loop does NOT stop; it continues with the next round.