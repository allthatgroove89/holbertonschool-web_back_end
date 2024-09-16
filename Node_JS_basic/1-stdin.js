// Import the readline module to handle input and output
const readline = require('readline');

// Create an interface for reading input from stdin and writing output to stdout
const read = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

// Display a welcome message an prompt the user for their name
read.question('Welcome to Holberton School, what is your name?\n', (name) =>{
    // Display the user's name
    console.log(`Your name is: ${name}\r`);
    // Close the readline interface
    read.close();
});

// Handles the close event to display the closing message
read.on('close', () => {
    console.log('This important software is now closing\r');
    process.exit(0);
});
