# DOM (Web Page Manipulation)

## What is the DOM?

**DOM** stands for **Document Object Model**.

When the browser opens an HTML page, it creates a structure of that page called the **DOM**.

JavaScript can use the DOM to **find, change, create, and remove HTML elements**.

For example, HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript can change it:

```js
let title = document.getElementById("title");

title.textContent = "Hello Mohamed";
```

The browser will show:

```text
Hello Mohamed
```

So the main idea of this level is:

```text
HTML
  ↓
DOM
  ↓
JavaScript
  ↓
Change the web page
```

## Why Do We Need the DOM?

HTML creates the structure of a web page.

JavaScript gives us the ability to make that page **interactive**.

With the DOM, JavaScript can:

* Change text
* Change HTML
* Change CSS
* Change attributes
* Add classes
* Remove classes
* Create new elements
* Remove elements
* React to user actions

For example:

```text
User clicks button
        ↓
JavaScript
        ↓
DOM
        ↓
Page changes
```

## The DOM Tree

The browser represents HTML like a tree.

For example:

```html
<body>
    <h1>Hello</h1>
    <button>Click</button>
</body>
```

The DOM looks roughly like:

```text
Document
   ↓
 html
   ↓
 body
 ├── h1
 └── button
```

JavaScript can move through this structure and work with these elements.

## Finding HTML Elements

Before JavaScript can change an element, it usually needs to **find it**.

We will learn:

```text
getElementById()
querySelector()
querySelectorAll()
```

For example:

```js
let title = document.getElementById("title");
```

Now `title` refers to the HTML element.

## Changing the Page

After finding an element, JavaScript can change it.

We will learn how to change:

```text
Text
HTML
CSS
Attributes
Classes
```

Example:

```js
title.textContent = "New Title";
```

The HTML page changes without refreshing the browser.

## Creating Elements

JavaScript can also create new HTML elements.

For example:

```js
let paragraph = document.createElement("p");

paragraph.textContent = "Hello!";
```

Then we can add that element to the page.

This becomes very useful when building dynamic applications.

## Removing Elements

JavaScript can also remove elements from the page.

This allows us to build interfaces where things can appear and disappear.

For example:

```text
Add item
   ↓
Item appears

Remove item
   ↓
Item disappears
```

## What We Learn in This Level

We learn DOM tools **one at a time**:

```text
1. DOM basics          → understand the DOM
2. DOM Tree            → understand HTML structure
3. getElementById()    → find an element by ID
4. querySelector()     → find an element using CSS selectors
5. querySelectorAll()  → find multiple elements
6. Changing text       → change what the page displays
7. Changing HTML       → change HTML inside an element
8. Changing CSS        → change styles with JavaScript
9. Attributes          → change HTML attributes
10. Classes            → add, remove, and change classes
11. Creating elements  → create new HTML elements
12. Removing elements  → remove elements from the page
```

Don't worry about these yet.

We will learn each one separately.

## Projects in This Level

After learning the DOM, we will build projects that use these skills:

* Todo App
* Notes App
* Calculator
* Quiz App

These projects will connect **HTML + CSS + JavaScript** together.

## Remember

```text
HTML → creates the page

DOM → represents the page

JavaScript → controls and changes the page
```

The main goal of this level is to learn how JavaScript can **communicate with HTML and manipulate the web page**.

Once you understand the DOM, JavaScript becomes much more useful in real websites.
