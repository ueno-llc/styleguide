# Ueno Styleguide

[![Travis](https://img.shields.io/travis/ueno-llc/eslint-config.svg?maxAge=2592000)](https://travis-ci.org/ueno-llc/styleguide)

## Usage

We use the same [eslint](http://eslint.org/) and [stylelint](https://stylelint.io/) configurations for all of our projects. They ensure that we write code the same way from project to project.

Our [starter kit](https://github.com/ueno-llc/starter-kit-universally/) has both built-in, but you can also add them to your own project:

#### eslint

```bash
yarn add @ueno/stylelint-config
```

Reference the config in your `.eslintrc`:

```json
{
  "extends": "@ueno"
}
```

If you don't want to include the React rules:

```json
{
  "extends": "@ueno/eslint-config/base"
}
```

There's also a React Native flavor:

```json
{
  "extends": "@ueno/eslint-config/react-native"
}
```

#### stylelint

```bash
yarn add @ueno/stylelint-config
```

Reference the config in your `.stylelintrc`:

```json
{
  "extends": "@ueno/stylelint-config"
}
```

## Local Development

This is a [Lerna](https://github.com/lerna/lerna)-powered monorepo containing the npm packages for our eslint and stylelint configs.

To edit the configs locally:

```bash
git clone git@github.com:ueno-llc/styleguide
yarn install
```

To publish a new version, make sure your Git tree is clean, then run `npm run publish`. Lerna will prompt you to set new version numbers for the packages that have changed, and then it will tag/commit and publish the new packages.
