# @ueno/eslint-config

> Ueno's eslint config

[![npm](https://img.shields.io/npm/v/@ueno/eslint-config.svg?maxAge=2592000)](https://www.npmjs.com/package/@ueno/eslint-config)

## Installation

```bash
npm install @ueno/eslint-config
```

## Usage

Reference the config in your `.eslintrc`:

```json
{
  "extends": "@ueno"
}
```

If you don't what to include the react rules:

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
npm install
npm test
```

## License

MIT &copy; [ueno.](http://ueno.co)
