# freelint Change Log
All notable changes to this project will be documented in this file.
This project adheres to SamVer 2.0. ([Semantic Versioning](http://semver.org/)).

## 3.1.0 - 2016-11-21

- Fix issue: no throw exceptions when code style incorrect.
- Refactor the api: remove the `-r` option for freelint, use `freelint-base` instead.

## 3.0.0 - 2016-10-17

- Upgrade Airbnb configuration, and all dependencies.
- Use `snazzy` as the default output format, then no need to write in pipe everytime.

## 2.0.12 - 2016-8-15

- Add `eslint-config-freelint` as extend.
  - Add setting `"parser: babel-eslint"` to `eslint-config-freelint`.
  - Add setting for `eslint-import-resolver-webpack` to solve import issue.

## 2.0.0 - 2016-7-15

- Follow the rules from Airbnb.
- Add SemVer2.0 support.

## 1.0.0+

Depreciated, never used.