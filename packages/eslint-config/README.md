# @ueno/eslint-config

> Ueno's eslint config

[![npm](https://img.shields.io/npm/v/@ueno/eslint-config.svg?maxAge=2592000)](https://www.npmjs.com/package/@ueno/eslint-config)

## Installation

```bash
yarn add @ueno/eslint-config
```

## Usage

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

## Local Development

```bash
git clone https://github.com/ueno-llc/styleguide
cd styleguide/packages/eslint-config
yarn install
yarn test
```

## License

MIT &copy; [ueno.](http://ueno.co)
