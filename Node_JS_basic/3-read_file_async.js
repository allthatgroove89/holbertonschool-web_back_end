const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .toString()
        .split('\n')
        .filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const NUMBER_OF_STUDENTS = students.length;
      console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', ',
          )}`,
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
