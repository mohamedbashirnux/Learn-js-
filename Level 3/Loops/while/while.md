# while Loop

## What is while?

The `while` loop repeats code **as long as a condition is true**.

It tells JavaScript:

> "While this condition is true, keep running this code."

The basic structure is:

```js
while (condition) {
    // code to repeat
}
```

## Example

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

console.log("Loop finished");
```

Output:

```text
1
2
3
4
5
Loop finished
```

## The 3 Parts

```js
let i = 1;          // 1. Start: the counter begins at 1
while (i <= 5) {    // 2. Condition: keep going while i is 5 or less
    console.log(i);
    i++;            // 3. Change: add 1 to i every round
}
```

| Part | In this example | What it does |
|---|---|---|
| Start | `let i = 1` | Where the counter begins |
| Condition | `i <= 5` | Decides if the loop runs again |
| Change | `i++` | Moves the counter, so the loop can end |

`i++` is the same as `i = i + 1`.

## How It Runs, Step by Step

| Round | `i` before | Condition `i <= 5` | Prints | `i` after `i++` |
|---|---|---|---|---|
| 1 | 1 | true | 1 | 2 |
| 2 | 2 | true | 2 | 3 |
| 3 | 3 | true | 3 | 4 |
| 4 | 4 | true | 4 | 5 |
| 5 | 5 | true | 5 | 6 |
| 6 | 6 | **false** | stops | - |

When `i` becomes 6, the condition is `false`, so JavaScript leaves the loop and runs the next line: `"Loop finished"`.

## Important Rules

1. **The condition is checked first.** If it is `false` from the start, the loop never runs, not even once.

```js
let i = 10;

while (i <= 5) {
    console.log(i); // never runs
}
```

2. **Always change the counter.** If you forget `i++`, the condition stays `true` forever and the loop never stops (an infinite loop).

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    // i++ is missing, so this never ends
}
```

3. **Check the condition carefully.** `i < 5` stops at 4, but `i <= 5` stops at 5.

## Try It Yourself

Change the example and predict the output before you run it:

* Change `i <= 5` to `i < 5`. What is the last number?
* Change `let i = 1` to `let i = 3`. What is the first number?
* Change `i++` to `i += 2`. What numbers show?

👉 Basically: `while` = keep repeating this code as long as the condition is true. Don't forget to change the counter.