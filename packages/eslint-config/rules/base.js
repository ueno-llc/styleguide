'use strict';

module.exports = {
  rules: {
    // We are not asking to specify a value to the return statement if not necessary
    'consistent-return': 0,

    // We don't want to force the use of this
    'class-methods-use-this': 0,

    // Requires consistent usage of linebreaks for each pair of parentheses.
    'function-paren-newline': ['error', 'consistent'],

    // We use global requires in various places, e.g. code splitting instances.
    'global-require': 0,

    // Make sure we have a blank line after imports block
    'import/newline-after-import': 'error',

    // We sometimes have components with same name on the same file, so we have
    // to rename one of the default import
    'import/no-named-as-default': 0,

    // Don't check the import of external modules that are not declared in the package.json
    // 'import/no-extraneous-dependencies': 0,

    // Ignore linebreak style. The CRLF / LF endings wont matter if a windows user correctly
    // converts CRLF to LF upon commits; otherwise there are errors every line.
    'linebreak-style': 0,

    // We want a blank line between class members
    'lines-between-class-members': ['error', 'always'],

    // We use arrow function
    'no-confusing-arrow': 0,

    // Allow useful console logging
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],

    // Allow ++ in for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Requires that either both curly braces, or neither, directly enclose newlines
    'object-curly-newline': ['error', { consistent: true }],

    // Disallows empty lines at the beginning and ending of block statements and classes
    'padded-blocks': 0,

    // We want to make sure we have a blank line after a block of const
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],

    // Allow reassigning props of objects, e.g. `foo.bar = 2`
    'no-param-reassign': ['error', { props: false }],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
}
