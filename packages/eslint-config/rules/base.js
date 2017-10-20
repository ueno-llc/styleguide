'use strict';

module.exports = {
  rules: {
    // We use global requires in various places, e.g. code splitting instances.
    'global-require': 0,
    // Ignore linebreak style. The CRLF / LF endings wont matter if a windows user correctly
    // converts CRLF to LF upon commits; otherwise there are errors every line.
    'linebreak-style': 0,
    // Other Ueno rules
    'padded-blocks': 0,
    'consistent-return': 0,
    'no-confusing-arrow': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    // Allow useful console logging
    'no-console': ['error', {
      allow: ['info', 'warn', 'error']
    }],
    // Allow ++ in for loops
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    // Allow reassigning props of objects, e.g. `foo.bar = 2`
    'no-param-reassign': ['error', {
      props: false
    }],
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true }],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
}