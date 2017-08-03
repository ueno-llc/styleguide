# Ueno Style Guide

[![Travis](https://img.shields.io/travis/ueno-llc/eslint-config.svg?maxAge=2592000)](https://travis-ci.org/ueno-llc/eslint-config)

## Table of Contents

1. Usage
1. JavaScript
  1. [Binding `this`](#binding-this)
  1. [Initial state](#initial-state)
1. Local Development

## Usage

We use the same [eslint](http://eslint.org/) and [stylelint](https://stylelint.io/) configurations for all of our projects. They ensure that we write code the same way from project to project.

Our [starter kit](https://github.com/ueno-llc/starter-kit-universally/) has both built-in, but you can also add them to your own project:

```bash
npm install @ueno/eslint-config --save-dev
npm install @ueno/stylelint-config --save-dev
```

For eslint, add an `.eslintrc` file with these contents:

```json
{
  "extends": "@ueno"
}
```

For stylelint, add a `.stylelintrc` file with these contents:

```json
{
  "extends": "@ueno/stylelint-config"
}
```

## JavaScript

### Binding `this`

There are several ways to bind a method to its class.

We recommend using decorators when available or the fat arrow style.

```js
import { autobind } from 'core-decorators';

// Bind one method
class A {

  @autobind
  method() {}
}

// Or bind all methods in class
@autobind
class B {

  method1() {}
  method2() {}
}

// If decorators are not available
class C {
  method = () => {}
}
```

We don't bind in constructor unless babel is not available. **Note: Never bind in looping methods (like the `render` method).**

```js
class A {
  constructor() {
    this.method = this.method.bind(this);
  }
}
```

**[⬆ back to top](#table-of-contents)**


### Initial state

We recommend setting the initial state outside the constructor.

```js
class A {
  state = {
    value: 1,
  };
}
```

**[⬆ back to top](#table-of-contents)**

## Local Development

This is a [Lerna](https://github.com/lerna/lerna)-powered monorepo containing the npm packages for our eslint and stylelint configs.

To edit the configs locally:

```bash
git clone git@github.com:ueno-llc/styleguide
npm install
```

To publish a new version, make sure your Git tree is clean, then run `npm run publish`. Lerna will prompt you to set new version numbers for the packages that have changed, and then it will tag/commit and publish the new packages.
