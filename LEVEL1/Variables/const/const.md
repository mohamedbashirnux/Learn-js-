const

const is a variable whose value CANNOT change later.

Use it by default, for anything that stays the same.
If it's an object or array, you can still change what's inside it — you just can't replace the whole thing.

const name = "Amiin";
name = "Bashir"; // ❌ error — can't reassign

const user = { name: "Amiin" };
user.name = "Bashir"; // ✅ works — changing a property, not the whole variable
👉 Basically: const = value that stays fixed (but objects/arrays inside it can still be edited).