# Function Declaration

## What is a Function Declaration?

A **function declaration** is a way to create a function using the `function` keyword.

It tells JavaScript:

> "Create this function so I can use it later."

Basic structure:

```js
function functionName() {
    // code to run
}
```

## Example

```js
function sayHello() {
    console.log("Hello Mohamed");
}

sayHello();
```

Output:

```text
Hello Mohamed
```

The function is created first, then `sayHello()` calls it.

## The Parts

```js
function sayHello() {
    console.log("Hello Mohamed");
}
```

| Part       | Meaning                                     |
| ---------- | ------------------------------------------- |
| `function` | Tells JavaScript we are creating a function |
| `sayHello` | The name of the function                    |
| `()`       | Where parameters can go later               |
| `{ }`      | Contains the code the function will run     |

## Create vs Call

Creating a function does **not** run it.

```js
function sayHello() {
    console.log("Hello");
}
```

Nothing prints yet.

We need to **call** the function:

```js
sayHello();
```

Now JavaScript runs the code inside the function.

```text
Create → Call → Run
```

## Calling a Function Multiple Times

One function can be called many times:

```js
function sayHello() {
    console.log("Hello");
}

sayHello();
sayHello();
sayHello();
```

Output:

```text
Hello
Hello
Hello
```

We write the code once, but we can run it many times.

## How It Runs

```js
function greet() {
    console.log("Hello");
    console.log("Welcome!");
}

greet();
```

JavaScript first creates the function.

Then `greet()` is called.

The code inside runs from top to bottom:

```text
Hello
Welcome!
```

## Important Rules

1. Use the `function` keyword to declare a function.

2. Give the function a name:

```js
function greet() {
}
```

3. The code inside `{ }` runs when the function is called.

4. Use `()` to call the function:

```js
greet();
```

5. A function can be called more than once.

## Function Without Calling

This does not print anything:

```js
function sayHello() {
    console.log("Hello");
}
```

Because the function was created but never called.

You need:

```js
sayHello();
```

## Try It Yourself

Change the example:

* Change the function name from `sayHello` to `welcome`.
* Change `"Hello"` to `"Welcome Mohamed"`.
* Call the function 5 times.
* Create another function called `goodbye()`.

## Remember

```text
function name() {
    code
}

name();
```

**Function declaration = create a reusable function.**

**Calling the function = make its code run.**
