const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'database.csv');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const fields = lines.slice(1);
        const totalStudents = fields.length;

        const csStudents = [];
        const sweStudents = [];

        fields.forEach((line) => {
          const [firstName, field] = line.split('', ');
          if (field === 'CS') {
            csStudents.push(firstName);
          } else if (field === 'SWE') {
            sweStudents.push(firstName);
          }
        });

        let result = 'This is the list of our students\n';
        result += `Number of students: ${totalStudents}\n`;
        result += `Number of students in CS: ${
          csStudents.length
        }. List: ${csStudents.join(', ')}\n`;
        result += `Number of students in SWE: ${
          sweStudents.length
        }. List: ${sweStudents.join(', ')}`;

        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/students') {
    countStudents(filePath)
      .then((output) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(output);
      });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);
