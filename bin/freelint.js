#!/usr/bin/env node

var spawn = require('cross-spawn');
var CompactToStylishStream = require('snazzy');

var standardCode;
var snazzy = new CompactToStylishStream();
var freelintBase = spawn('freelint-base', ['--verbose']);

freelintBase.stderr.pipe(process.stderr);
freelintBase.stdout.pipe(snazzy).pipe(process.stdout);
freelintBase.on('exit', function (code) { standardCode = code });

process.stdout.on('error', function() {});
process.on('exit', function (code) {
  if (code === 0 && standardCode !== 0) {
    process.exit(standardCode);
  }
});
