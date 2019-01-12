# @ueno/tslint-config

[![npm](https://img.shields.io/npm/v/@ueno/tslint-config.svg)](https://www.npmjs.com/package/@ueno/tslint-config)

## Installation

```bash
yarn add @ueno/tslint-config
```

## Usage

### TSLint

We have 2 configs to extend to your `tslint.json` file.

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

We have 2 differents `tsconfig.json` that you can extends to your `tsconfig.json` file.

**For React**

```json
{
  "extends": "./node_modules/@ueno/tslint-config/tsconfig-react",
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

**For React Native**

```json
{
  "extends": "./node_modules/@ueno/tslint-config/tsconfig-react-native",
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

## License

MIT &copy; [ueno.](http://ueno.co)
