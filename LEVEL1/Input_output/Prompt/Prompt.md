# prompt()

Shows a popup box in the browser asking the user to type something. Whatever they type gets returned as a string.

```js
let name = prompt("What is your name?");
console.log(name);
```

⚠️ **Browser only.** This does NOT work with `node file.js` in the terminal — Node has no popup windows. To test it, you need an HTML file open in a browser (Chrome/Edge), not the VS Code terminal.

👉 Basically: `prompt()` = ask the user a question, get their typed answer back.