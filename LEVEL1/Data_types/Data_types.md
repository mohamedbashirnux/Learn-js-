# What is a Data Type?

A data type is **what kind of value** is stored inside a variable. JS needs to know this because it treats different kinds of values differently — you can do math on a Number, but not on a String, for example.

```js
let age = 20;        // this value is a Number
let name = "Amiin";  // this value is a String
let isReady = true;  // this value is a Boolean
```

Same `let` keyword every time — but the **value** inside decides the type, not the keyword.

## Why it matters

```js
console.log(5 + 5);     // 10   — both Numbers, adds them
console.log("5" + "5"); // "55" — both Strings, joins them together (doesn't add!)
```

Same `+` symbol, totally different result — because the data type changed. This is why knowing your data types matters, especially for avoiding bugs like this.

## The 7 basic data types in JS

1. **String** — text
2. **Number** — any number
3. **Boolean** — true or false
4. **Null** — empty, on purpose
5. **Undefined** — no value given yet
6. **Symbol** — a guaranteed unique value (rare, advanced)
7. **BigInt** — for numbers too big for regular Number

You can always check a value's type using `typeof`:
```js
console.log(typeof 20);        // "number"
console.log(typeof "Amiin");   // "string"
console.log(typeof true);      // "boolean"
```

Each type gets its own file next — go through them one by one.