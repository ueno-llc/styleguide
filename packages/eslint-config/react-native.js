'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    require.resolve('./shared'),
  ],
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    // Can't declare custom path to components directory
    'import/no-extraneous-dependencies': 0,

    // React Native's bundler is weird
    'import/no-unresolved': 0,

    // We define stylesheets below component classes
    'no-use-before-define': 0,

    // This rule will find variables used in JSX and mark them as used.
    'react/jsx-uses-vars': 1,

    // JSX should consider the React variable as used.
    'react/jsx-uses-react': 1,

    // Add React Native-specific rules
    'react-native/no-unused-styles': 0,

    // We allow inline style
    'react-native/no-inline-styles': 0,
  },
};
