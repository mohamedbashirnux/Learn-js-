let

let is a variable whose value CAN change later.

Use it when you know the value will update (like a counter, age, score).
You cannot redeclare it with let again in the same place (that gives an error).

let age = 20;
age = 21; // works fine, value changed

let age = 22; // ❌ error — can't redeclare with let
👉 Basically: let = value that changes.