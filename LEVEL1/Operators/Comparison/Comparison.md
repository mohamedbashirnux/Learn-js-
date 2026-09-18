# Comparison Operators

Used to compare two values. Always gives back `true` or `false`.

```js
a == b   // loose equal, ignores type ("5" == 5 is true)
a === b  // strict equal, checks value AND type ("5" === 5 is false)
a != b   // loose not equal
a !== b  // strict not equal

a > b    // greater than
a < b    // less than
a >= b   // greater than or equal
a <= b   // less than or equal
```

👉 Basically: always use `===` and `!==` (strict), not `==`/`!=`. Strict is safer, avoids weird bugs.