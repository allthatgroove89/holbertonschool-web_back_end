# NodeJS Basics

## Requirements

    Allowed editors: vi, vim, emacs, Visual Studio Code
    All files will be interpreted/compiled on Ubuntu 20.04 LTS using Node.js (version 20.x.x)
    All files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the .js extension
    Your code will be tested using Jest and the command npm run test
    Your code will be verified against lint using ESLint
    Your code needs to pass all tests and lint. You can verify the entire project by running npm run full-test
    All functions/classes must be exported using the format: module.exports = myFunction;

## Tasks

---

### 0. Executing basic JavaScript with Node.js

Create a function named displayMessage that prints to STDOUT the string passed as an argument.

File: 0-console.js

---

### 1. Using Process stdin

Create a program named 1-stdin.js that will be executed via the command line. It should:

    Display the message: Welcome to Holberton School, what is your name? followed by a new line.
    Accept user input and display: Your name is: INPUT.
    Upon exiting, display: This important software is now closing.

File: 1-stdin.js

---

### 2. Reading a file synchronously with Node.js

Create a function countStudents in the file 2-read_file.js:

    It should accept a file path argument.
    Attempt to read the database file synchronously.
    If the file is not available, throw an error: Cannot load the database.
    Log the number of students and a list of first names for each field.

File: 2-read_file.js

---

### 3. Reading a file asynchronously with Node.js

Create a function countStudents in 3-read_file_async.js:

    Accept a file path as an argument.
    Read the file asynchronously.
    Return a Promise and handle errors or success.
    Log the number of students and a list of first names for each field.

File: 3-read_file_async.js

---

### 4. Create a small HTTP server using Node.js HTTP module

In 4-http.js, create a small HTTP server that:

    Is assigned to the variable app and exported.
    Listens on port 1245.
    Displays Hello Holberton School! for any endpoint in plain text.

File: 4-http.js

---

### 5. Create a more complex HTTP server using Node.js HTTP module

In 5-http.js, create an HTTP server that:

    Listens on port 1245.
    Displays Hello Holberton School! for the root path /.
    For /students, displays This is the list of our students followed by the student list from 3-read_file_async.js.

File: 5-http.js

---

### 6. Create a small HTTP server using Express

In 6-http_express.js, create a small HTTP server using Express:

    It should be assigned to the variable app and exported.
    Listens on port 1245.
    Displays Hello Holberton School! for the endpoint /.

File: 6-http_express.js

---

### 7. Create a more complex HTTP server using Express

In 7-http_express.js, recreate the HTTP server with Express:

    Listens on port 1245.
    Displays Hello Holberton School! for the root path /.
    For /students, displays This is the list of our students followed by the student list from 3-read_file_async.js.

File: 7-http_express.js

---

### 8. Organize a complex HTTP server using Express

8.1 Organize the structure of the server

Create a directory full_server with subdirectories controllers and routes. In full_server/utils.js, create a function readDatabase that:

    Reads the database asynchronously and returns a promise.
    Returns an object of arrays with the first names of students by field.

8.2 Write the App controller

In full_server/controllers/AppController.js, create a class AppController with a static method getHomepage that:

    Returns a 200 status with the message Hello Holberton School!.

8.3 Write the Students controller

In full_server/controllers/StudentsController.js, create two static methods:

    getAllStudents: Calls readDatabase, returns a list of students, and handles errors.
    getAllStudentsByMajor: Filters students by the major parameter (CS or SWE) and handles errors.

8.4 Write the routes

In full_server/routes/index.js, link routes to the controllers:

    / to AppController
    /students and /students/:major to StudentsController.

8.5 Write the server

In full_server/server.js, create a small Express server that:

    Uses the routes from full_server/routes/index.js.
    Listens on port 1245.

8.6 Update package.json

Update the dev command in package.json to run with Babel:
nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv.
Repo Information

    GitHub repository: holbertonschool-web_back_end
    Directory: Node_JS_basic
