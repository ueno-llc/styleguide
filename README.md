[![logo](https://user-images.githubusercontent.com/937328/50185354-72631680-030f-11e9-8c9f-1982c55bbe03.png)](https://ueno.co/?utm_source=github&utm_campaign=styleguide)
<br /><br />
![banner](https://user-images.githubusercontent.com/937328/50185358-72631680-030f-11e9-85c4-de1eb9ad9b03.png)
<br /><br />
[![about](https://user-images.githubusercontent.com/937328/50184746-da186200-030d-11e9-8edb-3227e9300524.png)](https://ueno.co/contact/?utm_source=github&utm_campaign=styleguide)
<br /><br />

## Usage

There is 4 npm packages in this repository:

- eslint-config [Documentation](./packages/eslint-config/README.md)
- tslint-config [Documentation](./packages/tslint-config/README.md)
- stylelint-config [Documentation](./packages/stylelint-config/README.md)
- eslint-plugin-internal [Documentation](./packages/eslint-plugin-internal/README.md)

## Local Development

This is a [Lerna](https://github.com/lerna/lerna)-powered monorepo. To edit the configs locally:

```bash
git clone git@github.com:ueno-llc/styleguide
yarn install
```

To publish a new version, make sure your Git tree is clean, then run `npm run publish`. Lerna will prompt you to set new version numbers for the packages that have changed, and then it will tag/commit and publish the new packages.
