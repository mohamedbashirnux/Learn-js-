# What is a Variable?

A variable is a **box that stores a value**, so you can use that value later in your code instead of typing it over and over.

**Without a variable** (repeating the same text everywhere):
```js
console.log("Amiin is 20 years old");
console.log("Amiin lives in Mogadishu");
```

**With a variable** (store it once, reuse it):
```js
let name = "Amiin"; // store "Amiin" in a box called "name"
console.log(name + " is 20 years old");
console.log(name + " lives in Mogadishu");
```

Now if the name changes, you only update it in ONE place — the variable — instead of hunting through your whole file.

## The 3 parts of a variable

```js
let age = 20;
//  ↑    ↑   ↑
// keyword name value
```

1. **Keyword** — tells JS "I'm making a variable." There are 3 options: `var`, `let`, `const`.
2. **Name** — what you'll call the box (like `age`, `price`, `name`). You use this name later to read or change the value.
3. **Value** — what's actually stored inside, set using `=`.

## Why 3 different keywords?

They all create variables, but differ in **whether the value can change later**:
- `var` → old way, loose, avoid it
- `let` → value CAN change
- `const` → value CANNOT change

Each one gets its own file next — but this is the base idea to hold onto: **a variable = a named box holding a value.**