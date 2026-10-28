# Control Flow

> **LEVEL 2 — Control Flow**
> Goal: learn how to make JavaScript **make decisions**.

---

## What is Control Flow?

**Control flow** is the way JavaScript controls the **order** in which code runs.

Normally, JavaScript runs code from **top to bottom**, one line after another:

```js
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

Every line runs. Nothing is skipped. Nothing is chosen.

---

## Why Do We Need It?

Real programs must **decide** things.

```text
If the user is 18 or older  → allow the user
If the user is younger      → don't allow the user
```

```text
If the PIN is correct  → show the ATM menu
If the PIN is wrong    → show an error
```

Without control flow, a program can only do the same thing every time.
With control flow, a program can **choose a path**.

---

## What Can Control Flow Do?

- Make decisions (this chapter)
- Choose between different paths (this chapter)
- Repeat code (Level 3 — Loops)
- Stop or skip code (Level 3 — `break` and `continue`)

---

## How a Decision Works

Every decision has 3 parts:

```js
let age = 20;                    // 1. a value

if (age >= 18) {                 // 2. a condition (true or false?)
    console.log("Adult");        // 3. code that runs if the condition is true
}
```

1. **Value** — the data we are checking.
2. **Condition** — a question that gives `true` or `false`.
3. **Code block** — what runs when the answer is `true`.

The condition uses things you already learned in Level 1:

- Comparison operators: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Logical operators: `&&` (and), `||` (or), `!` (not)

---

## The Path Picture

```text
            ┌───────────────┐
            │   condition   │
            └───────┬───────┘
          true      │      false
      ┌─────────────┴─────────────┐
      ▼                           ▼
 run this code             run other code
```

JavaScript checks the condition, then goes down **one** path.

---

## What We Will Learn (One at a Time)

| # | Topic | What it does |
|---|-------|--------------|
| 1 | `if` | Run code only if a condition is true |
| 2 | `else` | Run other code if the condition is false |
| 3 | `else if` | Check more than 2 possible paths |
| 4 | `switch` | Compare one value with many exact cases |
| 5 | Truthy & Falsy | How JavaScript treats any value as true or false |
| 6 | Logical Thinking | How to break a problem into conditions before coding |
| 7 | Nested Conditions | Put one decision inside another decision |

We will learn them **in this order**, because each one builds on the one before it.

---

## Folder Structure for This Level

```text
LEVEL 2/
└── Control Flow/
    ├── control-flow.md        ← this file
    ├── if/
    │   ├── if.md
    │   ├── if.js
    │   └── index.html
    ├── else/
    ├── else_if/
    ├── switch/
    ├── truthy-falsy/
    ├── logical-thinking/
    ├── nested-conditions/
    └── projects/
        └── ATM/
```

Each topic has its own folder with:

- `.md` — my explanation in my own words
- `.js` — examples I run and change
- `index.html` — to run the code in the browser

---

## How I Study Each Topic

1. Read the idea and write it in **my own words** in the `.md` file.
2. Write the example in the `.js` file and run it.
3. **Change the values** and guess the output before running.
4. Break the code on purpose and read the error.
5. Do the small exercises at the end of the topic.

---

## Important Rules to Remember

- A condition must give `true` or `false` (or a value JavaScript treats like that).
- Use `===` to compare, not `=`.
  - `=` **stores** a value.
  - `===` **checks** if two values are equal.
- Only **one** path runs in an `if / else if / else` chain.
- Always use `{ }` for the code block, even for one line.
- The order of your conditions matters — JavaScript checks from top to bottom and stops at the first `true`.

```js
let score = 85;

if (score >= 50) {
    console.log("Pass");        // this runs first and stops here
} else if (score >= 80) {
    console.log("Very good");   // never reached, wrong order!
}
```

---

## Projects for This Level

After all 7 topics, I build:

1. **Grade system** — score → A, B, C, D, F
2. **ATM simulation** — PIN, balance, withdraw, deposit
3. **Login checker** — username and password check

---

## Quick Summary

- Control flow = the order in which code runs.
- Normal code runs top to bottom.
- Conditions let JavaScript **choose** which code to run.
- `if`, `else`, `else if`, and `switch` are the main decision tools.
- Truthy/falsy, logical thinking, and nested conditions help me build real decisions.

---

## Check Yourself

Answer without running the code:

1. What is control flow in one sentence?
2. What are the 3 parts of a decision?
3. What is the difference between `=` and `===`?
4. In an `if / else if / else` chain, how many blocks can run?
5. Why does the order of the conditions matter?

**Next topic → `if`**