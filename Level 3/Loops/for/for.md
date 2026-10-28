# for Loop

## What is for?

The `for` loop repeats code a **set number of times**.

It is the same as `while`, but the 3 parts (start, condition, change) are written **on one line**, so it is shorter and easier to read.

The basic structure is:

```js
for (start; condition; change) {
    // code to repeat
}
```

## Example

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
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
for (let i = 1; i <= 5; i++) {
//   1. start   2. condition  3. change
    console.log(i);
}
```

| Part | In this example | What it does |
|---|---|---|
| Start | `let i = 1` | Runs **once**, at the very beginning |
| Condition | `i <= 5` | Checked **before every round** |
| Change | `i++` | Runs **after every round** |

The parts are separated by `;` (semicolons), not commas.

## for vs while

This `while` loop:

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

is exactly the same as this `for` loop:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Same result. `for` just puts everything on one line, so you can't forget the `i++`.

## The Order It Runs In

```text
1. start       (once)
2. condition   → false? stop. true? continue
3. code inside { }
4. change      (i++)
5. go back to step 2
```

| Round | `i` | Condition `i <= 5` | Prints | After `i++` |
|---|---|---|---|---|
| 1 | 1 | true | 1 | 2 |
| 2 | 2 | true | 2 | 3 |
| 3 | 3 | true | 3 | 4 |
| 4 | 4 | true | 4 | 5 |
| 5 | 5 | true | 5 | 6 |
| 6 | 6 | **false** | stops | - |

## Other Ways to Use It

**Count down:**

```js
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

Output: `5 4 3 2 1`. When counting down, the condition uses `>=` and the change is `i--`.

**Count by 2:**

```js
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

Output: `2 4 6 8 10`. `i += 2` means `i = i + 2`.

## Important Rules

1. **Use `;` between the parts**, not commas: `for (let i = 1; i <= 5; i++)`.
2. **`i` only exists inside the loop.** Because of `let`, using `i` after the loop gives an error.
3. **Check the condition carefully.** `i < 5` stops at 4, and `i <= 5` stops at 5.
4. **Use `for` when you know how many times**, like 1 to 10. Use `while` when you don't know.

## Try It Yourself

Predict the output before you run it:

* Change `i <= 5` to `i <= 10`. What is the last number?
* Change `let i = 1` to `let i = 3`. What is the first number?
* Change `i++` to `i += 2`. What numbers show?

👉 Basically: `for` = a loop with start, condition and change on one line. Use it when you know how many times to repeat.