# do while Loop

## What is do while?

The `do while` loop is like `while`, but it **runs the code first, then checks the condition**.

That means the code runs **at least once**, even if the condition is `false` from the start.

The basic structure is:

```js
do {
    // code to repeat
} while (condition);
```

Notice the `;` at the end. `do while` needs it after the condition.

## Example

```js
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

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

Same result as `while` here. The difference shows up when the condition is false at the start.

## The Big Difference: while vs do while

```js
let i = 10;

// while: checks first
while (i <= 5) {
    console.log("while:", i);   // never runs
}

// do while: runs first, checks after
do {
    console.log("do while:", i);   // runs once
} while (i <= 5);
```

Output:

```text
do while: 10
```

| | `while` | `do while` |
|---|---|---|
| When is the condition checked? | **Before** the code | **After** the code |
| If the condition is false at the start | Runs **0** times | Runs **1** time |

```text
while:      check → run → check → run → ...
do while:   run → check → run → check → ...
```

## How It Runs, Step by Step

Using `let i = 1;` and `} while (i <= 5);`:

| Round | Runs code | Prints | `i` after `i++` | Condition `i <= 5` |
|---|---|---|---|---|
| 1 | yes | 1 | 2 | true → go again |
| 2 | yes | 2 | 3 | true → go again |
| 3 | yes | 3 | 4 | true → go again |
| 4 | yes | 4 | 5 | true → go again |
| 5 | yes | 5 | 6 | **false** → stop |

## When Do We Use It?

Use `do while` when something **must happen at least once**, then repeat only if needed.

The most common example is a menu or a password check. You always ask the user once, and ask again only if the answer is wrong:

```js
let password;

do {
    password = prompt("Enter the password:");
} while (password !== "1234");
```

The user is asked **at least once**. If the password is wrong, the question comes back. (`prompt` works in the browser only, not in Node.)

## Important Rules

1. **Don't forget the `;`** after `while (condition)`.
2. **Still change the counter.** If nothing makes the condition `false`, the loop never stops (an infinite loop).
3. **The code always runs once**, so be careful if the first run should not happen.

## Try It Yourself

Predict the output before you run it:

* Change `let i = 1` to `let i = 10` in the first example. How many times does it print?
* Change `i <= 5` to `i < 3`. What is the last number?
* In the password example, what happens if you press Cancel? (Hint: `prompt` gives `null`, and `null !== "1234"` is `true`.)

👉 Basically: `do while` = run the code first, then check. It always runs at least once.