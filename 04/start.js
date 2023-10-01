const fs = require('fs'); // Node.js module to read the file data.json

// Read the JSON file
const rawData = fs.readFileSync('data.json');
const jsonData = JSON.parse(rawData);

//  Create an iterator object for jsonData


//  Iterate over the array
