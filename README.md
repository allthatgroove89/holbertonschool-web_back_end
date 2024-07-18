ES6 Classes
Learning Objectives
By the end of this project, you should be able to:

Define a Class in JavaScript.
Add methods to a class.
Understand and add static methods to a class.
Extend a class from another class.
Understand metaprogramming and the use of symbols.
Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
Allowed editors: vi, vim, emacs, Visual Studio Code.
All your files should end with a new line.
A README.md file at the root of the folder of the project is mandatory.
Your code should use the .js extension.
Your code will be tested using Jest and the command npm run test.
Your code will be verified against lint using ESLint.
Your code needs to pass all the tests and lint. Verify the entire project by running npm run full-test.
Setup
Install NodeJS 20.x.x
In your home directory:

bash
￼Copy code
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify installation:

bash
￼Copy code
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
Install Jest, Babel, and ESLint
In your project directory:

bash
￼Copy code
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
Configuration Files
package.json

json
￼Copy code
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
babel.config.js

js
￼Copy code
module.exports = {
  presets: ['@babel/preset-env'],
};
.eslintrc.js

js
￼Copy code
module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    // Custom rules
  },
};
Don't forget to run $ npm install when you have the package.json.
