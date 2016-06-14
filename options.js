var eslint = require('eslint');
var path = require('path');
var pkg = require('./package.json');

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint, // pass any version of eslint >= 1.0.0
  cmd: 'freelint', // should match the "bin" key in your package.json
  tagline: pkg.description, // displayed in output --help
  eslintConfig: {
    configFile: path.join(__dirname, 'rc', 'eslintrc.json')
  }
  // cwd: '' // current working directory, passed to eslint

  // These are optional. If included, the --format option will be made available
  // formatter: require('pocketlint-format'), // note you'll have to create this :)
  // formatterName: 'pocketlint-format'
};
