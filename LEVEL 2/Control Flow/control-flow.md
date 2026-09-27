# Control Flow

## What is Control Flow?

**Control flow** is the way JavaScript controls the order in which code runs.

Normally, JavaScript executes code from **top to bottom**:

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

But sometimes we don't want every piece of code to run.

We may want the program to **make a decision**.

For example:

```text
If the user is 18 or older
→ allow the user

If the user is younger than 18
→ don't allow the user
```

This is where **control flow** is used.

## What Can Control Flow Do?

Control flow allows JavaScript to:

* Make decisions
* Choose different paths
* Repeat code
* Stop or skip code

Some JavaScript control-flow tools are:

```text
if
if...else
else if
switch
loops
break
continue
```

We will learn them **one at a time**.

## Example

```js
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}
```

Here JavaScript checks:

```js
age >= 18
```

If the condition is `true`, the code inside `if` runs.

So the basic idea is:

```text
Condition → Decide → Run code
```

## What We Learn First

We will start with:

```text
1. if
2. if...else
3. else if
4. switch
```