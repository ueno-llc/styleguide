'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    require.resolve('./base/index'),
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
        ],
        moduleDirectory: [
          'node_modules',
        ],
      },
    },
  },
}
