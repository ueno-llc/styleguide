[![logo](https://user-images.githubusercontent.com/937328/50185354-72631680-030f-11e9-8c9f-1982c55bbe03.png)](https://ueno.co/?utm_source=github&utm_campaign=styleguide)
<br /><br />
![banner](https://user-images.githubusercontent.com/937328/50185358-72631680-030f-11e9-85c4-de1eb9ad9b03.png)
<br /><br />
[![about](https://user-images.githubusercontent.com/937328/51540139-999c8e80-1e4d-11e9-866d-284657a34744.png)](https://ueno.co/contact/?utm_source=github&utm_campaign=styleguide)
<br /><br />

## Usage

There is 4 npm packages in this repository:

- eslint-config [Documentation](./packages/eslint-config)
- tslint-config [Documentation](./packages/tslint-config)
- stylelint-config [Documentation](./packages/stylelint-config)
- eslint-plugin-internal [Documentation](./packages/eslint-plugin-internal)

## Development

This is a [Lerna](https://github.com/lerna/lerna)-powered monorepo.

If you want to edit, for example, `tslint-config` and try it on your project:

```bash
git clone git@github.com:ueno-llc/styleguide
cd packages/tslint-config
yarn install
yarn link
```

In your project do:
```bash
cd my-project
yarn link "@ueno/tslint-config"
```

## Publishing

You can either decide to bump all 4 packages by running:

```bash
yarn run publish
```

or if you just want to publish a single package (tslint-config for example):

```bash
yarn run publish --scope="@ueno/tslint-config"
```
