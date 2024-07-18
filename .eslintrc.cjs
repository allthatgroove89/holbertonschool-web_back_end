module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
    },
  };