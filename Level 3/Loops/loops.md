# Loops

## What is a Loop?

A **loop** repeats the same code again and again, so you don't have to write it many times.

Without a loop, to show the numbers 1 to 5 you would write:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Now imagine you need 1 to 1000. Writing 1000 lines is not possible.

With a loop, you write the code **once** and JavaScript repeats it:

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
```

## Why Do We Need Loops?

Loops are used when we want to:

* Repeat something many times (print, count, add)
* Go through a list of things one by one
* Keep asking until the user gives a correct answer
* Build tables and patterns

Real examples:

```text
Show the multiplication table of 5
Ask for a PIN until it is correct
Add up 100 prices in a shopping cart
Print a pattern of stars
```

## How a Loop Thinks

A loop keeps asking one question:

```text
Should I go around one more time?
```

```text
Check condition
   ↓
true  → run the code → change the counter → check again
false → stop the loop
```

## The 3 Parts of a Loop

Almost every loop has these 3 parts:

```js
let i = 1;          // 1. Start: where the counter begins
while (i <= 5) {    // 2. Condition: keep going while this is true
    console.log(i);
    i++;            // 3. Change: move the counter
}
```

1. **Start** — the first value of the counter (`let i = 1`)
2. **Condition** — the loop runs only while this is `true` (`i <= 5`)
3. **Change** — update the counter each time (`i++`, which means `i = i + 1`)

## Warning: Infinite Loop

If you forget the **change**, the condition never becomes `false`, and the loop never stops:

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    // i++ is missing, so i stays 1 forever
}
```

This freezes the page or the terminal. To stop it in the terminal, press `Ctrl + C`. In the browser, close the tab.

Before you run a loop, always check: **will the condition ever become false?**

## What We Learn in This Level

Loops have different tools. We learn them **one at a time**:

```text
1. while          → repeat while a condition is true
2. do while       → run at least once, then check
3. for            → a shorter way to write a counter loop
4. break          → stop the loop early
5. continue       → skip one round and go to the next
6. Nested loops   → a loop inside another loop
```

## Which Loop Should I Use?

| Situation | Loop |
|---|---|
| You don't know how many times | `while` |
| It must run at least once (like a menu) | `do while` |
| You know the number of times (1 to 10) | `for` |

Don't worry about this table yet. It will make sense after you build the projects.

## Projects in This Level

* Multiplication table
* Number guessing game
* Star patterns

## Remember

```text
Start → Condition → Run code → Change → Repeat
```

A loop is like `if`, but instead of checking once, it keeps checking until the condition is `false`.