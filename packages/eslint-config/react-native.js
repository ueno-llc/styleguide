'use strict';

const deepmerge = require('deepmerge');
const baseConfig = require('.');

module.exports = deepmerge(baseConfig, {
  plugins: [
    'react-native'
  ],
  rules: {
    // We define stylesheets below component classes
    'no-use-before-define': 0,
    // React Native's bundler is weird
    'import/no-unresolved': 0,
    // Add React Native-specific rules
    'react-native/no-unused-styles': 0,
    'react-native/no-inline-styles': 0
  }
});
