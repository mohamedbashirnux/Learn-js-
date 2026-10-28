# break

## What is break?

The `break` statement **stops a loop immediately**, even if the loop condition is still `true`.

It tells JavaScript:

> "Stop the loop right now and continue with the code after the loop."

The basic structure is:

```js
while (condition) {

    if (someCondition) {
        break;
    }

}
```

## Example

```js
let i = 1;

while (i <= 5) {

    if (i === 3) {
        break;
    }

    console.log(i);
    i++;
}

console.log("Loop finished");
```

Output:

```text
1
2
Loop finished
```

When `i` becomes `3`, `break` runs and **stops the loop immediately**.

## How `break` Works

```js
let i = 1;

while (i <= 5) {

    if (i === 3) {
        break;
    }

    console.log(i);
    i++;
}
```

There are two conditions here:

| Condition | What it does                        |
| --------- | ----------------------------------- |
| `i <= 5`  | Controls whether the loop continues |
| `i === 3` | Decides when to stop the loop early |

The loop normally wants to continue until `i` becomes `6`.

But `break` says:

> "If `i` is 3, stop now."

## How It Runs, Step by Step

| Round | `i` | `i <= 5` | `i === 3` | Result           |
| ----- | --: | -------- | --------- | ---------------- |
| 1     |   1 | true     | false     | Prints 1         |
| 2     |   2 | true     | false     | Prints 2         |
| 3     |   3 | true     | **true**  | **break → stop** |

So `3`, `4`, and `5` are never printed.

## Important Rules

1. **`break` stops the loop immediately.**

```js
let i = 1;

while (i <= 5) {

    if (i === 3) {
        break;
    }

    console.log(i);
    i++;
}
```

The loop stops when `i` reaches `3`.

2. **`break` can stop a loop even when its main condition is still true.**

At `i = 3`:

```js
i <= 5
```

is still `true`.

But:

```js
break;
```

stops the loop anyway.

3. **Code after `break` inside the current loop does not run.**

```js
while (i <= 5) {

    if (i === 3) {
        break;
    }

    console.log(i);
}
```

When `i === 3`, JavaScript immediately leaves the loop.

## `break` vs Normal Loop Ending

Without `break`:

```text
1
2
3
4
5
Loop finished
```

With `break` at `3`:

```text
1
2
Loop finished
```

The normal condition would allow the loop to continue, but `break` stops it early.

## Try It Yourself

Change the example and predict the output before you run it:

* Change `i === 3` to `i === 4`. What is the last number printed?
* Change `i === 3` to `i === 1`. What happens?
* Remove the `break`. What numbers show?

👉 Basically: `break` = **stop the loop immediately.**
