/* global process */

const readline = require('readline');

// Function to handle input, wrapped in a function for testability
function askName() {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (input) => {
        process.stdout.write(`Your name is: ${input}\n`);
        rl.close();
    });

    rl.on('close', () => {
        process.stdout.write('This important software is now closing\n');
    });
}

if (require.main === module) {
    askName();
}

module.exports = askName;
