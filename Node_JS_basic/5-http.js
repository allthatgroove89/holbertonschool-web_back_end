const http = require('http')
const fs = require('fs')
const path = require('path')

// Function to count students and return the result as a string
function countStudents(database) {
    return new Promise((resolve, reject) => {
        fs.readFile(database, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
            const students = lines.slice(1).map((line) => line.split(','));

            const NUMBER_OF_STUDENTS = students.length;
            let result = `Number of students: ${NUMBER_OF_STUDENTS}\n`;

            const fields = {};
            students.forEach((student) => {
                const field = students[3];
                if (!fields[field]) fields[field] = [];
                fields[field].push(student[0]);
            });

            for (const [field, names] of Object.entries(fields)) {
                result += `Number of students in ${field}: ${names.length}.
                List: ${names.join(', ')}\n`;
            }

            resolve(result.trim());
        });
    });
}

// Create the server and handle requests
const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const database = process.argv[2];
        if (!database) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Database file path not provided')
            return;
        }
        countStudents(database)
            .then((result) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`This is the list of our students\n${result}`);
            })
            .catch((error) => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(error.message);
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// HTTP server should listen on port 1245
app.listen(1245)

// Export the server instance
module.exports = app;
