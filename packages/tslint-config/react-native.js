const path = require('path');

module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-react',
    'tslint-config-airbnb',
    'tslint-origin-ordered-imports-rule',
  ],
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-origin-ordered-imports-rule'))),
  ],
  rules: {
    'array-type': false,
    align: false,
    'ordered-imports': false,
    'origin-ordered-imports': [true, 'one-blank-line'],
    'object-literal-sort-keys': false,
    'max-line-length': [true, { limit: 140, 'ignore-pattern': '^import |^export {(.*?)}' }],
    'member-access': false,
    'member-ordering': false,
    'no-default-export': true,
    'no-var-requires': false,
    'variable-name': false,
    'import-name': false,
    'import-spacing': true,
    'jsx-boolean-value': false,
    'jsx-no-multiline-js': false,
    'jsx-wrap-multiline': true,
    'no-boolean-literal-compare': false,
    'no-console': [true, 'debug', 'log'],
    'no-else-after-return': [true, 'allow-else-if'],
    'prefer-array-literal': false,
    'object-shorthand-properties-first': false,
    indent: [true, 'spaces', 2],
    'interface-name': true,
  },
  linterOptions: {
    exclude: [
      'node_modules',
    ],
  },
};
