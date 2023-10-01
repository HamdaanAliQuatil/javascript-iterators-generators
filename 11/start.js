// Define the numbers generator. generates numbers from 1 to 10
function* numbersGenerator() {
    
}

// Define the filter generator that filters only even numbers. Odd numbers are skipped
function* filterGenerator() {
    
}

const iterator = filterGenerator();

// Iterate and log the filtered sequence
for (const value of iterator) {
    console.log(value);
}
