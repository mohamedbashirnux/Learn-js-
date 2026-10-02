# Functions

## What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code again and again, we can put it inside a function and use it whenever we need it.

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

We write the code **once** and reuse it.

## Why Do We Need Functions?

Functions are used when we want to:

* Reuse code
* Avoid repeating the same code
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

Instead of putting everything into one big program, we can separate each task into a function.

## How a Function Thinks

A function can work like a small machine:

```text
Input
  ↓
Function
  ↓
Output
```

For example:

```text
5 + 3
  ↓
add function
  ↓
8
```

A function can receive information, do some work, and return a result.

## The Basic Idea of a Function

A function has two important actions:

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

Creating the function does not run it immediately.

The function runs when we **call** it.

## Function Input and Output

Functions can receive values:

```js
function greet(name) {
    console.log("Hello " + name);
}

greet("Mohamed");
```

Here:

```text
name → parameter
"Mohamed" → argument
```

Functions can also return values:

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

## What We Learn in This Level

Functions have different tools. We learn them **one at a time**:

```text
1. Function declaration → create a function
2. Parameters & arguments → give information to a function
3. Return              → send a result back
4. Function expression  → store a function in a variable
5. Arrow functions      → shorter function syntax
6. Scope                → where variables can be used
```

Don't worry about all of these yet.

We will learn each one separately.

## Scope

Functions introduce an important idea called **scope**.

Scope answers:

> "Where can I use this variable?"

For example:

```js
let username = "Mohamed";

function greet() {
    let message = "Hello";

    console.log(username);
    console.log(message);
}
```

Some variables can be used outside a function, while others belong only inside it.

We will learn this carefully later.

## Warning: Repeating Code

Without functions, a large program can become difficult to manage:

```js
console.log("Checking username...");
console.log("Checking password...");

console.log("Checking username...");
console.log("Checking password...");

console.log("Checking username...");
console.log("Checking password...");
```

Instead, we can put the repeated work into a function:

```js
function checkLogin() {
    console.log("Checking username...");
    console.log("Checking password...");
}

checkLogin();
checkLogin();
checkLogin();
```

Write once → reuse many times.

## Projects in This Level

* Calculator with functions
* Password validator

These projects will combine functions with the JavaScript concepts we already learned.

## Remember

```text
Create → Call → Run

Input → Function → Output
```

A function is a reusable block of code.

Instead of writing the same code many times, **write it once and call it whenever you need it.**
