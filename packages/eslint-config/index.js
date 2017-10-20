'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    require.resolve('./rules/base'),
  ],
  rules: {
    // A `.jsx` extension is not required for files containing JSX.
    'react/jsx-filename-extension': 0,
    // This rule struggles with flow and class properties.
    'react/sort-comp': 0,
    // Other Ueno rules
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'react/require-extension': 0,
    'react/forbid-prop-types': ['error', {
      forbid: ['any']
    }],

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['a'],
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.scss'
        ],
        moduleDirectory: [
          'node_modules',
          'shared'
        ]
      }
    }
  }
};
