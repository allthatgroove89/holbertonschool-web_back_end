ES6 Promises - Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

Promises (how, why, and what)
How to use the then, resolve, catch methods
How to use every method of the Promise object
Throw / Try
The await operator
How to use an async function
Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be tested using Jest and the command npm run test
Your code will be verified against lint using ESLint
All of your functions must be exported
Setup
Install NodeJS 20.x.x
(in your home directory):

bash
￼Copy code
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify the installation:

bash
￼Copy code
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
Install Jest, Babel, and ESLint
In your project directory:

Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
Install ESLint using: npm install --save-dev eslint
Files
package.json
[Click to show/hide file contents]

babel.config.js
[Click to show/hide file contents]

utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

[Click to show/hide file contents]

.eslintrc.js
[Click to show/hide file contents]

And…

Don’t forget to run npm install when you have the package.json.

Response Data Format
uploadPhoto returns a response with the format:

json
￼Copy code
{
  "status": 200,
  "body": "photo-profile-1"
}
createUser returns a response with the format:

json
￼Copy code
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
Tasks
0. Keep every promise you make and only make promises you can keep
Mandatory

Return a Promise using this prototype function getResponseFromAPI().

Example:

js
￼Copy code
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise); // true
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 0-promise.js
1. Don't make a promise...if you know you can't keep it
Mandatory

Using the prototype below, return a promise. The parameter is a boolean.

getFullResponseFromAPI(success)

When the argument is:

true: resolve the promise by passing an object with two attributes:
status: 200
body: 'Success'
false: reject the promise with an error object with the message "The fake API is not working currently."
Example:

js
￼Copy code
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 1-promise.js
2. Catch me if you can!
Mandatory

Using the function prototype below:

js
￼Copy code
function handleResponseFromAPI(promise)
Append three handlers to the function:

When the Promise resolves, return an object with the following attributes:
status: 200
body: 'success'
When the Promise rejects, return an empty Error object.
For every resolution, log "Got a response from the API" to the console.
Example:

js
￼Copy code
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 2-then.js
3. Handle multiple successful promises
Mandatory

In this file, import uploadPhoto and createUser from utils.js.

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

js
￼Copy code
function handleProfileSignup()
In the event of an error, log "Signup system offline" to the console.

Example:

js
￼Copy code
import handleProfileSignup from "./3-all";

handleProfileSignup();
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 3-all.js
4. Simple promise
Mandatory

Using the following prototype:

js
￼Copy code
function signUpUser(firstName, lastName) {
}
That returns a resolved promise with this object:

json
￼Copy code
{
  "firstName": "value",
  "lastName": "value"
}
Example:

js
￼Copy code
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 4-user-promise.js
5. Reject the promises
Mandatory

Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string ${fileName} cannot be processed.

Example:

js
￼Copy code
export default function uploadPhoto(filename) {
}
js
￼Copy code
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 5-photo-reject.js
6. Handle multiple promises
Mandatory

Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled, it should return an array with the following structure:

json
￼Copy code
[
  {
    "status": "status_of_the_promise",
    "value": "value or error returned by the Promise"
  }
]
Example:

js
￼Copy code
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 6-final-user.js
7. Load balancer
Mandatory

Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).

The function should return the value returned by the promise that resolved first.

Example:

js
￼Copy code
export default function loadBalancer(chinaDownload, USDownload) {
}
js
￼Copy code
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
  setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
  setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
  console.log(await loadBalancer(promiseUK, promiseFR));
  console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
File: 7-load_balancer.js
8. Throw an error
Mandatory

Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).

When the denominator argument is equal to 0, the function should throw a new error with the message "cannot divide by 0." Otherwise, it should return the numerator divided by the denominator.

Example:

js
￼Copy code
export default function divideFunction(numerator, denominator) {
}
js
￼Copy code
import divideFunction from './8-try';

console.log(divideFunction(10, 2)); // 5
console.log(divideFunction(10, 0)); // Error: cannot
￼
9. Throw Error / Try Catch
Handle errors using try...catch and return an array with results.

File: 9-try.js

javascript
￼Copy code
// Implement this function
Repo
GitHub repository: holbertonschool-web_back_end
Directory: ES6_promise
￼
￼
￼
