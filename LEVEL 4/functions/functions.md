# Functions

## What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code again and again, you can write it **once** inside a function and use it whenever you need it.

Without a function:

```js
console.log("Hello Mohamed");
console.log("Hello Mohamed");
console.log("Hello Mohamed");
```

With a function:

```js
function sayHello() {
    console.log("Hello Mohamed");
}

sayHello();
sayHello();
sayHello();
```

The code is written once and reused.

## Why Do We Need Functions?

Functions are used when we want to:

* Reuse code
* Avoid repeating code
* Break a big program into smaller parts
* Make code easier to read
* Organize our programs

Real examples:

```text
Calculate a price
Check a password
Calculate a total
Show a message
Convert temperature
```

## How a Function Works

A function has a simple idea:

```text
Create the function
       ↓
Call the function
       ↓
Code runs
```

Example:

```js
function greet() {
    console.log("Hello!");
}

greet();
```

Creating a function does not run the code.

The function runs when you **call** it.

## Function Input

A function can receive information.

```js
function greet(name) {
    console.log("Hello " + name);
}

greet("Mohamed");
```

Here:

```text
name       → parameter
"Mohamed"  → argument
```

Parameters allow a function to work with different values.

## Function Output

A function can also send a value back using `return`.

```js
function add(a, b) {
    return a + b;
}

let result = add(5, 3);

console.log(result);
```

Output:

```text
8
```

The function receives values, does some work, and returns a result.

## What We Learn in This Level

Functions have different tools. We learn them **one at a time**:

```text
1. Function declaration   → create a function
2. Parameters & arguments → give information to a function
3. return                 → send a result back
4. Function expression    → store a function in a variable
5. Arrow function        → shorter function syntax
6. Scope                  → where variables can be used
```

Don't worry about all of these yet.

We will learn each one separately.

## Scope

Functions also introduce **scope**.

Scope answers:

```text
Where can I use this variable?
```

For example:

```js
let username = "Mohamed";

function greet() {
    let message = "Hello";

    console.log(username);
    console.log(message);
}
```

Some variables can be used outside a function, while other variables belong only inside the function.

We will learn this later.

## Projects in This Level

* Calculator with functions
* Password validator

These projects will combine functions with the JavaScript concepts we already learned.

## Remember

```text
Create → Call → Run

Input → Function → Output
```

A function is a **reusable block of code**.

Write the code once, then call the function whenever you need it.
