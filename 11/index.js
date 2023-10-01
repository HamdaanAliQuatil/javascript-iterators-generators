// Define the numbers generator
function* numbersGenerator() {
    for (let i = 1; i <= 10; i++) {
        yield i;
    }
}

// Define the filter generator
function* filterGenerator() {
    for (const number of numbersGenerator()) {
        // Define the filtering condition (e.g., even numbers)
        if (number % 2 === 0) {
            yield number;
        }
    }
}

const iterator = filterGenerator();

// Iterate and log the filtered sequence
for (const value of iterator) {
    console.log(value);
}
