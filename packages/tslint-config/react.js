const path = require('path');

module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-react',
    'tslint-origin-ordered-imports-rule',
  ],
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-origin-ordered-imports-rule'))),
  ],
  rules: {
    quotemark: [true, 'single', 'jsx-double'],
    'member-access': false,
    'member-ordering': false,
    'object-literal-sort-keys': false,
    'ordered-imports': false,
    'origin-ordered-imports': [true, 'one-blank-line'],
    'variable-name': [true, 'ban-keywords', 'check-format', 'allow-leading-underscore', 'allow-pascal-case'],
    'max-line-length': [true, { limit: 140, 'ignore-pattern': '^import |^export {(.*?)}' }],
    'jsx-boolean-value': false,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
  },
  linterOptions: {
    exclude: [
      'node_modules',
    ],
  },
};
