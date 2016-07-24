# freelint

[![Build Status](https://travis-ci.org/zslucky/freelint.svg?branch=master)](https://travis-ci.org/zslucky/freelint)

a lint tool based on standard-engine.

Version 1.0+ is deprecated.

Version 2.0+ is refer to airbnb/javascript.

We are followed [SamVer 2.0](http://semver.org/), this started from version 2.0.0, then we will try our best to avoide the dependency hell.

### Install
```bash
npm install freelint --save-dev
```

### Usage
```bash
freelint
```

That's all.

#### If you are using babel features. please add the `babel-eslint` plugin and add it in `package.json`.
```javascript
"freelint": {
  "parser": "babel-eslint"
}
```



## Know Issues
1. As airbnb is using `eslint-plugin-imports`, this plugin need extra resolver for webpack if we add the reslove settings, now We added `eslint-import-resolver-webpack` as a tmp solution, but this plugin should 
add settings in `.eslintrc` to tell this resolver where it can find the webpack config.
So If we need add reslove settings for webpack, we should add a file named `webpack.resolve.js` to `config` dir in project's root dir. 

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