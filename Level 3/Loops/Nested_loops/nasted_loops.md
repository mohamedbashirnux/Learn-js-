# Nested Loops

## What are Nested Loops?

A **nested loop** is a loop **inside another loop**.

It tells JavaScript:

> "For every round of the outside loop, run the inside loop."

The basic structure is:

```js
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        // inner loop
    }

}
```

The **outer loop** controls the big rounds.

The **inner loop** runs completely for every outer-loop round.

## Example

```js id="7xq2lm"
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log("i:", i, "j:", j);
    }

}
```

Output:

```text id="m1s8kd"
i: 1 j: 1
i: 1 j: 2
i: 1 j: 3
i: 2 j: 1
i: 2 j: 2
i: 2 j: 3
i: 3 j: 1
i: 3 j: 2
i: 3 j: 3
```

## How Nested Loops Work

Look at this:

```js id="5c0j8n"
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}
```

There are two loops:

| Loop       | Variable | Job                          |
| ---------- | -------- | ---------------------------- |
| Outer loop | `i`      | Controls the main rounds     |
| Inner loop | `j`      | Runs completely for each `i` |

When `i` is `1`, the inner loop runs:

```text
j = 1
j = 2
j = 3
```

Then `i` becomes `2`.

The inner loop starts again:

```text
j = 1
j = 2
j = 3
```

Then `i` becomes `3`.

Again:

```text
j = 1
j = 2
j = 3
```

## How It Runs, Step by Step

| Outer `i` | Inner `j` | Result |
| --------: | --------: | ------ |
|         1 |         1 | `1 1`  |
|         1 |         2 | `1 2`  |
|         1 |         3 | `1 3`  |
|         2 |         1 | `2 1`  |
|         2 |         2 | `2 2`  |
|         2 |         3 | `2 3`  |
|         3 |         1 | `3 1`  |
|         3 |         2 | `3 2`  |
|         3 |         3 | `3 3`  |

The important idea is:

**The inner loop finishes completely before the outer loop moves to the next round.**

## Another Example

Nested loops are useful for creating patterns.

```js id="x3f9pk"
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 5; j++) {
        console.log("*");
    }

    console.log("---");
}
```

The outer loop runs 3 times.

The inner loop runs 5 times for each outer round.

So the inner loop runs:

**3 × 5 = 15 times**

## Important Rules

1. A nested loop is simply a **loop inside another loop**.
2. The inner loop runs completely for every outer-loop round.
3. The outer loop does not move to the next round until the inner loop finishes.
4. You can use `for`, `while`, or `do...while` as nested loops.
5. Be careful with large nested loops because the inner loop can run many times.

## Try It Yourself

Change:

```js
for (let i = 1; i <= 3; i++)
```

to:

```js
for (let i = 1; i <= 2; i++)
```

What happens?

Then change:

```js
for (let j = 1; j <= 3; j++)
```

to:

```js
for (let j = 1; j <= 4; j++)
```

How many times does the inner loop run?

### Target

Understand this idea:

```text
Outer loop
    ↓
    Inner loop
        ↓
        runs completely
    ↓
Outer loop next round
```

👉 Basically:

**Nested loops = a loop inside another loop.**
