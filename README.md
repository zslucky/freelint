# freelint

[![Build Status](https://travis-ci.org/zslucky/freelint.svg?branch=master)](https://travis-ci.org/zslucky/freelint)

a lint tool based on standard-engine.

Version 1.0+ is refer to standardjs. (Deprecated)

Version 2.0+ is refer to airbnb/javascript.

### Install
```bash
npm install freelint --save-dev
```

### Usage
```bash
freelint
```

That's all.


### How do I make the output all colorful and *pretty*?

The built-in output is simple and straightforward, but if you like shiny things,
install [snazzy](https://www.npmjs.com/package/snazzy):

```
npm install snazzy
```

And run:

```bash
$ freelint --verbose | snazzy
```

### How do I ignore files?

The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically ignored.

Sometimes you need to ignore additional folders or specific minified files. To do that, add
a `standard.ignore` property to `package.json`:

```json
"freelint": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```