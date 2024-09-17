/** @type {import('eslint').FlatConfig} */
const config = [
    {
      files: ['*.js'],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: 'module',
        },
        globals: {
          // Define globals if needed
        },
      },
      rules: {
        // Define your rules here
      },
    },
  ];

  module.exports = config;