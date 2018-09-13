'use strict';

const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(path.dirname(require.resolve('tslint-origin-ordered-imports-rule')), './'),
  ],
  rules: {
    quotemark: [
      true,
      'single',
      'jsx-double',
    ],

    'origin-ordered-imports': [
      true,
      'one-blank-line',
    ],

    'max-line-length': [
      true,
      {
        limit: 140,
        'ignore-pattern': '^import |^export {(.*?)}',
      },
    ],

    'no-implicit-dependencies': [
      true,
      'dev',
      [
        '~assets',
        '~components',
        '~config',
        '~stores',
        '~utils',
        '~screens',
      ],
    ],

    'variable-name': [
      true,
      'allow-pascal-case',
      'ban-keywords',
      'check-format',
    ],

    typedef: false,

    'no-submodule-imports': false,
    'ordered-imports': false,
    'import-name': false,
    'export-name': false,
    'no-relative-imports': false,
    'trailing-comma': true,
    'missing-jsdoc': false,
    'completed-docs': false,
    'no-unsafe-any': false,
    'no-floating-promises': false,
    'strict-boolean-expressions': false,
  },
};
