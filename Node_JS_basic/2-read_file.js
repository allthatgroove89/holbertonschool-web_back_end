const fs = require('fs');

function countStudents(path) {

  let content;
  
  try {
    content = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.toString().split('\n');

  let students = content.filter((item) => item);

  students = students.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fields = {};
  for (let i = 1; i < students.length; i++) {
    const field = students[i][3];
    if (!fields[field]) fields[field] = [];
    fields[field].push(students[i][0]);
    }

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}
module.exports = countStudents;
