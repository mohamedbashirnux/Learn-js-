# continue

## What is continue?

The `continue` statement **skips the current loop round** and moves to the next round.

It tells JavaScript:

> "Skip this round and continue with the loop."

The basic structure is:

```js
while (condition) {

    if (someCondition) {
        continue;
    }

    // code
}
```

## Example

```js
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
```

Output:

```text
1
2
4
5
Loop finished
```

When `i` becomes `3`, `continue` skips that round.

So `3` is not printed.

## How `continue` Works

```js
let i = 1;

while (i <= 5) {

    if (i === 3) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}
```

There are two important parts:

| Part       | What it does                |
| ---------- | --------------------------- |
| `i === 3`  | Checks when we want to skip |
| `continue` | Skips the current round     |

When `i` is `3`, JavaScript reaches `continue`.

Everything below `continue` in that loop round is skipped.

Then the loop starts the next round.

## How It Runs, Step by Step

| Round | `i` | `i === 3` | Result              |
| ----- | --: | --------- | ------------------- |
| 1     |   1 | false     | Prints 1            |
| 2     |   2 | false     | Prints 2            |
| 3     |   3 | **true**  | **Skip this round** |
| 4     |   4 | false     | Prints 4            |
| 5     |   5 | false     | Prints 5            |
| 6     |   6 | false     | Loop stops          |

Notice that `3` is skipped, but the loop **does not stop**.

## `continue` vs `break`

### `break`

```js
if (i === 3) {
    break;
}
```

Output:

```text
1
2
```

`break` → **stops the entire loop**.

### `continue`

```js
if (i === 3) {
    continue;
}
```

Output:

```text
1
2
4
5
```

`continue` → **skips only the current round**.

## Important Rules

1. `continue` does **not** stop the loop.
2. It skips the current iteration.
3. The loop continues with the next iteration.
4. Code after `continue` in the current iteration will not run.

## Try It Yourself

Change:

```js
if (i === 3)
```

to:

```js
if (i === 2)
```

What number will be skipped?

Then try:

```js
if (i === 5)
```

What happens?

👉 Basically:

**`continue` = skip this round and keep looping.**
