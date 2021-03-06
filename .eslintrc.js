// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "quotes": [1, "single"],
    "eqeqeq": [1, "smart"],
    "keyword-spacing": 2,
    "no-console": 0,
    "dot-notation": 0,
    "indent": 0,
    "space-before-function-paren": 0,
    "no-undefined": 1,
    "no-unused-vars": 1,
    "no-shadow-restricted-names": 1,
    "quote-props": 0,
    "no-return-assign": 1,
    "no-nested-ternary": 0,
    "spaced-comment": 0,
    "eol-last": 1,
    "func-names": 1,
    "no-trailing-spaces": 1,
    "no-div-regex": 1,
    "guard-for-in": 1,
    "block-scoped-var": 1,
    "no-shadow": 1,
    "object-shorthand": 1,
    "new-cap": 1,
    "prefer-const": 1,
    "no-param-reassign": 1,
    "no-unused-expressions": 1,
    "no-else-return": 1,
    "prefer-template": 1,
    "consistent-return": 1,
    "max-len": 1,
    "array-callback-return": 1,
    "no-unneeded-ternary": 1,
    "prefer-rest-params": 1,
    "arrow-body-style": 1,
    "linebreak-style": 0,
  }
}