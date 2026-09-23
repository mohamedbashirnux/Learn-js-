# Symbol

A Symbol creates a value that is always 100% unique, even if two symbols look the same. Rare in beginner code — mostly used for special hidden object keys.

```js
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false — always unique
```

👉 Basically: Symbol = a guaranteed one-of-a-kind value.