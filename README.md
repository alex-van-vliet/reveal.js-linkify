# Linkify

A Reveal.js plugin to automatically create links to online compilers.

Linkify will add a "Run Online!" button to every supported code block automatically.
The language can be set by adding a `<language>` or `language-<language>` class to the `code` element:

```html
<pre><code class="javascript">
console.log("Hello, world!");
</code></pre>
<pre><code class="language-javascript">
console.log("Hello, world!");
</code></pre>
```

When using Markdown, the language can be specified as usual:

````markdown
```js
console.log("Hello, world!");
```
````

The language can also be determined automatically with the code highlight plugin!

For ease of use in HTML mode, it is recommended to use the `data-trim` and `data-noescape` attributes:

```html

<pre><code class="language-javascript" data-trim data-noescape>
    console.log("Hello, world!");
</code></pre>
```

Supported languages: C++ (Godbolt), JavaScript (Codepen).

## Installation

### Simple

Simply copy the `plugin/linkify` directory into your slide's `plugins` directory.

### NPM

The plugin can be installed using `npm install --save reveal.js-linkify`.

## Setup

To load the plugin, simply load both the JavaScript:

```html

<script src="plugin/linkify/linkify.js"></script>
```

And CSS:

```html

<link rel="stylesheet" href="plugin/linkify/linkify.css">
```

If you installed the plugin via npm, you should prefix the paths with `node_modules/reveal.js-linkify/`.

Once this is done, you can directly load the Linkify plugin by adding `Linkify` in your Reveal.js `plugins` list:

```js
Reveal.initialize({
  // configuration...

  plugins: [ /* other plugins..., */ Linkify]
});
```

When using `RevealMarkdown` and/or `RevealHighlight`, make sure to load Linkify after these plugins.

## Configuration

Linkify can be configured directly into Reveal.js's configuration:

```js
Reveal.initialize({
  // configuration...

  linkify: {
    // Linkify configuration options
    text: 'Run Online!', // Set the text of the link
    class: 'linkify-link', // Set the class added to the link
    languages: { // Language-specific configurations
      cpp: {
        disassemble: false, // Whether to launch Godbolt in disassembler mode or in run mode

        compiler: 'clang_trunk', // The compiler to use (see http://godbolt.org/api/compilers for the list of compilers)
        options: '', // The flags to pass to the compiler
        execute: true, // Whether to automatically execute the code
        libs: [], // Any libraries to load
      },
      javascript: {
        editors: {
          html: false, // Whether to open the html editor
          css: false, // Whether to open the css editor
          javascript: true, // Whether to open the javascript editor
        },
        layout: 'left', // The layout to use (top, left or right)
      },
    },
  },

  plugins: [ /* other plugins..., */ Linkify]
});
```

### Style

Changing the style of the link is done by applying new styles to the `.reveal pre code + .linkify-link` selector.

You can either do it in your own stylesheet or change the provided one.

### In-depth configuration

To allow for even more configuration (for example to allow for comparison between several compilers on Godbolt),
languages can be configured through several methods as well. However, these are more complex and may require an
understanding of the online compiler's api to implement. Please see the methods for each language in the
corresponding `languages/<language>.js` file. Do not hesitate to ask should you have any questions!

For example, to compare GCC and Clang on Godbolt, you might do:

```js
Reveal.initialize({
  // configuration...

  linkify: {
    // Linkify configurations options
    languages: {
      cpp: {
        disassemble: true,

        compilers(config) {
          return [
            {
              id: 'clang_trunk',
              libs: this.libs,
              options: this.options,
              filters: {
                execute: this.execute,
              },
            },
            {
              id: 'gsnapshot',
              libs: this.libs,
              options: this.options,
              filters: {
                execute: this.execute,
              },
            },
          ];
        },
      },
    },
  },

  plugins: [ /* other plugins..., */ Linkify],
});
```

### Adding a new language

Adding a new language is as simple as adding an object inside the `languages` dictionary with the key being the language
name and the value an object with at least an `element` method returning an element or list of elements to append after
the code block:

```js
Reveal.initialize({
  // configuration...

  linkify: {
    // Linkify configurations options
    languages: {
      my_new_language: {
        element(config, source) {
          const el = ...;
          
          // Create a link to the online compier...
          // An example for a GET request can be seen in language/cpp.js.
          // An example for a POST request can be seen in language/javascript.js
          
          return el; // return [el, ...];
        },
      },
    },
  },

  plugins: [ /* other plugins..., */ Linkify],
});
```

If you have implemented a new editor for a new language, please do not hesitate to make a PR!

## License

GNU GPLv3 Licensed 

Copyright (C) 2023, Alex van Vliet <alex@vanvliet.pro>

## Thanks

Thanks for using Linkify!
