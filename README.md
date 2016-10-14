# freelint

[![Build Status](https://travis-ci.org/zslucky/freelint.svg?branch=master)](https://travis-ci.org/zslucky/freelint)

a lint tool based on standard-engine and rules follow the [Airbnb javascript standard](https://github.com/airbnb/javascript).


We are followed [SamVer 2.0](http://semver.org/), this started from version 2.0.0, then we will try our best to avoide the dependency hell.

### Install (Global)
```bash
npm install -g freelint
```

### Install (Local)
```bash
npm install freelint --save-dev

# ...
# Add npm task in package.json.
"script": {
  "freelint": "freelint",
  ...
}
```

### Usage (Global)
In your project's directiry.
```bash
freelint
```

### Usage (Local)
```bash
npm run freelint
```

That's all.

## Know Issues
1. If you are using ES6 import/export feature, and webpack like build tool with a resolve setting, you should extract the resolve settings to a new file named `webpack.resolve.js`, and place it to `config` dir in root dir, we know it's a dirty code, if you have any good solution, don't hesitated to create a pull request.(e.g.[Demo](https://github.com/zslucky/react-redux-freetmp))

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
a `freelint.ignore` property to `package.json`:

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

### TODO

I'm working on 3.0.0, new features bellow:
1. Add `snazzy` as default format, then no need to do more steps.
2. Support custom format by setting from cli.
3. Add report function by setting from cli.