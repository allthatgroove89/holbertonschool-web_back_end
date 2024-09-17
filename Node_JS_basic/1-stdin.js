/* global process */

const readline = require('readline');

// Function to handle input, wrapped in a function for testability
function askName() {
    console.log('Welcome to Holberton School, what is your name?');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (input) => {
        console.log(`Your name is: ${input}`);
        rl.close();
    });

    rl.on('close', () => {
        console.log('This important software is now closing');
    });
}

if (require.main === module) {
    askName();
}

module.exports = askName;
