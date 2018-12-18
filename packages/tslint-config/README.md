# @ueno/tslint-config

[![npm](https://img.shields.io/npm/v/@ueno/tslint-config.svg)](https://www.npmjs.com/package/@ueno/tslint-config)

## Installation

```bash
yarn add @ueno/tslint-config
```

## Usage

### TSLint

We have 3 differents configs, reference the one you need in your `tslint.json`

**For Vanilla javascript**

```json
{
  "extends": "@ueno/tslint-config/vanilla"
}
```

**For React**

```json
{
  "extends": "@ueno/tslint-config/react"
}
```

**For React Native**

```json
{
  "extends": "@ueno/tslint-config/react-native"
}
```

### TSConfig

We also have 2 differents `tsconfig.json` that you can extends to your `tsconfig.json` file.

**For React**

```json
{
  "extends": "./node_modules/@ueno/tslint-config/tsconfig-react",
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["./src"],
  "exclude": ["./node_modules"]
}
```

**For React Native**

```json
{
  "extends": "./node_modules/@ueno/tslint-config/tsconfig-react-native",
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["./src"],
  "exclude": ["./node_modules"]
}
```

## License

MIT &copy; [ueno.](http://ueno.co)
