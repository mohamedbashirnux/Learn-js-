# Comparison Operators

Every comparison operator is a yes/no question. JS answers with `true` or `false`. Never anything else.

---

## `==` — "Equal to" (loose)
**What it does:** Checks if two values look the same. Does NOT care about type (Number vs String).
```js
5 == 5      // true - same value
5 == "5"    // true - same value, ignores that one is text
5 == 6      // false - different value
```

## `===` — "Strictly equal to"
**What it does:** Checks if two values are the same AND the same type. Both must match, no exceptions.
```js
5 === 5     // true - same value, same type (both Number)
5 === "5"   // false - same value, but different type (Number vs String)
5 === 6     // false - different value
```

**The key difference:** `==` only checks what it looks like. `===` also checks what it actually IS. Always prefer `===`.

---

## `!=` — "Not equal to" (loose)
**What it does:** The exact opposite of `==`. `!` means "NOT" — it flips the answer.
```js
5 == "5"    // true  (already know this)
5 != "5"    // false (flipped)

5 == 6      // false
5 != 6      // true (flipped)
```
**Think of it as asking:** "are these different?" (ignoring type, same loose rules as `==`)

## `!==` — "Strictly not equal to"
**What it does:** The exact opposite of `===`. Same flip logic, but strict (checks type too).
```js
5 === "5"   // false (already know this)
5 !== "5"   // true (flipped)

5 === 5     // true
5 !== 5     // false (flipped)
```
**Think of it as asking:** "are these different, checking type too?"

**The pattern to remember:** whatever `==` says, `!=` says the opposite. Whatever `===` says, `!==` says the opposite. You don't need new logic — just flip the answer you already know.

---

## `>` `<` `>=` `<=` — basic comparisons
Same as math class:
```js
10 > 5   // true  - is 10 bigger than 5?
3 > 5    // false

3 < 5    // true  - is 3 smaller than 5?
10 < 5   // false

5 >= 5   // true  - bigger OR equal, equal counts
4 >= 5   // false

5 <= 5   // true  - smaller OR equal, equal counts
6 <= 5   // false
```

---

## Rule of thumb
Always use `===` and `!==` in real code. Avoid `==` and `!=` — they can trick you with sneaky type mismatches you didn't intend.