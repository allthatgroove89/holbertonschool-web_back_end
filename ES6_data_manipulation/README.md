# ES6 Data Manipulation

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The `Set`, `Map`, and `Weak` data structures

## Setup

### Install NodeJS 20.x.x

In your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
# Verify the installation:

`bash
$ nodejs -v
v20.15.1
$ npm -v
10.7.0

Install Jest, Babel, and ESLint
In your project directory:

Install Jest using:

bash
￼Copy code
npm install --save-dev jest
Install Babel using:

bash
￼Copy code
npm install --save-dev babel-jest @babel/core @babel/preset-env
Install ESLint using:

bash
￼Copy code
npm install --save-dev eslint
Configuration Files
package.json
babel.config.js
.eslintrc.js
Don’t forget to run $ npm install when you have the package.json.

Tasks
0. Basic List of Objects


Create a function named getListStudents that returns an array of objects. Each object should have three attributes: id (Number), firstName (String), and location (String). The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco
bash
￼Copy code
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 0-get_list_students.js
1. More Mapping


Create a function getListStudentIds that returns an array of ids from a list of objects. This function takes one argument, which is an array of objects (same format as getListStudents from the previous task). If the argument is not an array, the function should return an empty array. You must use the map function on the array.

bash
￼Copy code
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[]
[ 1, 2, 5 ]
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 1-get_list_student_ids.js
2. Filter
Mandatory

Create a function getStudentsByLocation that returns an array of objects located in a specific city. It should accept a list of students (from getListStudents) and a city (string) as parameters. You must use the filter function on the array.

bash
￼Copy code
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 2-get_students_by_loc.js
3. Reduce


Create a function getStudentIdsSum that returns the sum of all student ids. It should accept a list of students (from getListStudents) as a parameter. You must use the reduce function on the array.

bash

bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
8
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 3-get_ids_sum.js
4. Combine


Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade. It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters. newGrades is an array of objects with this format:

json

{
  studentId: 31,
  grade: 78
}
If a student doesn’t have a grade in newGrades, the final grade should be N/A. You must use filter and map combined.

bash

bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 4-update_grade_by_city.js
5. Typed Arrays


Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: length (Number), position (Number), and value (Number). If adding the value is not possible, the error "Position outside range" should be thrown.

bash

bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 5-typed_arrays.js
6. Set Data Structure


Create a function named setFromArray that returns a Set from an array. It
accepts an argument (Array of any kind of element).

bash

bob@dylan:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 6-set.js
7. More Set Data Structure


Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).

bash

bob@dylan:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
true
false
false
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 7-has_array_values.js
8. Clean Set


Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString). It accepts two arguments: a set (Set) and a startString (String). When a value starts with startString, you only append the rest of the string. The string contains all the values of the set separated by -.

bash

bob@dylan:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
jovi-aparte-appetit

bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 8-clean_set.js
9. Map Data Structure


Create a function named groceriesList that returns a Map of groceries with the following items (name, quantity):

Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
bash
￼Copy code
bob@dylan:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 9-groceries_list.js
10. More Map Data Structure


Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1. It should accept a map as an argument. The map it accepts is similar to the map you created in the previous task. For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map), the error "Cannot process" should be thrown.

bash

bob@dylan:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$
Repo:

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation
File: 10-update_uniq_items.js
sql


Feel free to adjust any specific details or formatting as needed!
￼
￼
￼
￼
￼

