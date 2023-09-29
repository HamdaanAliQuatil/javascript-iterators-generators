const fs = require('fs'); // Node.js module to read the file data.json

// Read the JSON file
const rawData = fs.readFileSync('data.json');
const jsonData = JSON.parse(rawData);

//  Create an iterator object for jsonData
const iterator = jsonData[Symbol.iterator]();

//  Iterate over the array
let result = iterator.next();
while(!result.done){
    console.log(result.value);
    result = iterator.next();
}