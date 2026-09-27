# Nested Conditions

## What are Nested Conditions?

Nested conditions mean putting one `if` statement inside another `if` statement.

This is useful when one decision depends on another decision.

## Example

```js
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("You can enter");
    } else {
        console.log("You need an ID");
    }
} else {
    console.log("You are too young");
}