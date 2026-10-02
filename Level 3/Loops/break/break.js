// break example: stop the loop when i reaches 3

let i = 1;

while (i <= 5) {

    if (i === 3) {
        break;
    }

    console.log(i);
    i++;
}

console.log("Loop finished");

// Output:
// 1
// 2
// Loop finished
//
// break stops the loop immediately when i === 3.