#!/usr/bin/env node

var argv = require('argv');
var spawn = require('cross-spawn');
var CompactToStylishStream = require('snazzy');

var argvOptions = require('../argv.config');

var args = argv.option(argvOptions).run();
var useRawOutput = args.options.raw;

var snazzy = new CompactToStylishStream();

var freelintBase = spawn('freelint-base', ['--verbose']);

freelintBase.on('exit', function() {});
freelintBase.stdout.on('error', function() {});

if (useRawOutput) {
  freelintBase.stdout.pipe(process.stdout);
} else {
  freelintBase.stdout.pipe(snazzy).pipe(process.stdout);
}
