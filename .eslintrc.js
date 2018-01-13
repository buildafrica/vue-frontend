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
    'indent': 'off',
    'semi': 'off',
    'max-len': 'off',
    'prefer-template': 0,
    'no-tabs': 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off',
    'no-alert': 'off',
    'func-names': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    // 'quotes': 0,
    'comma-dangle': 'off',
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
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
