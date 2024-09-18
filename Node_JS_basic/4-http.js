const http = require('http');

// Create the server and hanlde requests
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
});

// HTTP server should listen on port 1245
app.listen(1245);

// Export the server instance
module.exports = app;
