# Logical Operators

Used to combine or flip true/false conditions. Always gives back `true` or `false`.

## && (AND) — strict, needs BOTH true

```js
true && true    // true
true && false   // false
false && true   // false
false && false  // false
```
Only true when EVERYTHING is true. One false ruins it — like a group project where everyone has to finish their part.

```js
let age = 20;
let hasTicket = true;
console.log(age >= 18 && hasTicket); // true - both pass

let age2 = 15;
console.log(age2 >= 18 && hasTicket); // false - age fails, so whole thing fails
```

## || (OR) — relaxed, needs AT LEAST ONE true

```js
true || true    // true
true || false   // true
false || true   // true
false || false  // false
```
Only false when EVERYTHING is false. Just one true saves it — like paying with cash OR card, only need one to work.

```js
let hasCash = false;
let hasCard = true;
console.log(hasCash || hasCard); // true - card alone is enough

let hasCash2 = false;
let hasCard2 = false;
console.log(hasCash2 || hasCard2); // false - neither works
```

## ! (NOT) — flips it

```js
!true   // false
!false  // true
```
Takes whatever you give it and flips it to the opposite.

```js
let isRaining = false;
console.log(!isRaining); // true - "it's NOT raining" is true
```

## The difference in one line
- `&&` = everyone must agree (strict)
- `||` = just one vote is enough (relaxed)
- `!` = flips whatever you give it

## Practice — predict these before running them
```js
console.log(5 > 3 && 2 > 10);  // ?
console.log(5 > 3 || 2 > 10);  // ?
console.log(!(5 > 3));         // ?
```