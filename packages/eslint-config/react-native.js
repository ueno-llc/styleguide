'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    require.resolve('./base/index'),
  ],
  plugins: [
    'react-native',
  ],
  rules: {
    // React Native's bundler is weird
    'import/no-unresolved': 0,

    // We define stylesheets below component classes
    'no-use-before-define': 0,

    // Add React Native-specific rules
    'react-native/no-unused-styles': 0,

    // We allow inline style
    'react-native/no-inline-styles': 0,
  },
};
