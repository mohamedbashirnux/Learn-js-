# What is HTML DOM?

## What is DOM?

**DOM** stands for **Document Object Model**.

When the browser opens an HTML file, it reads the HTML and creates a structure called the **DOM**.

JavaScript can then use this DOM to access and change the HTML page.

Think of it like this:

```text
HTML file
   ↓
Browser
   ↓
DOM
   ↓
JavaScript can access the page
```

## Example

HTML:

```html
<h1>Hello</h1>
<p>Welcome to my website</p>
```

The browser creates a DOM from this HTML.

JavaScript can then find the `<h1>` and change it.

```text
HTML
 ↓
<h1>Hello</h1>
<p>Welcome to my website</p>

        ↓ Browser creates DOM ↓

DOM
 ↓
h1
p

        ↓ JavaScript ↓

Change h1
```

## Simple Example

In our HTML file:

```html
<h1 id="title">Hello</h1>

<script>
    let title = document.getElementById("title");

    title.textContent = "Hello Mohamed";
</script>
```

The browser first creates the DOM from:

```html
<h1 id="title">Hello</h1>
```

Then JavaScript finds that element and changes its text.

The page changes from:

```text
Hello
```

to:

```text
Hello Mohamed
```

## Important Idea

The DOM is **not the HTML file itself**.

The HTML is the code we write.

The DOM is the browser's **representation of that HTML** that JavaScript can work with.

```text
HTML → Browser → DOM → JavaScript
```

## Remember

> **DOM = the browser's representation of the HTML page.**

JavaScript uses the DOM to **access and manipulate the web page**.

In the next topic, we will learn how to select elements from the DOM.
