function fetchData(callback) {
    setTimeout(() => {
        callback(null, 'Data Fetched');
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback(null, `Processed: ${data}`);
    }, 1000);
}

function saveData(data, callback) {
    setTimeout(() => {
        callback(null, `Saved: ${data}`);
    }, 1000);
}

// Using nested callbacks
fetchData((err, data) => {
    if (err) {
        console.error(err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error(err);
            } else {
                saveData(processedData, (err, savedData) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(savedData);
                    }
                });
            }
        });
    }
});

console.log("hello");




//Now, let's rewrite the same example using promises, which flattens the structure and makes it more readable.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data Fetched');
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Saved: ${data}`);
        }, 1000);
    });
}

// Using promise chaining
fetchData()
    .then(data => {
        return processData(data);
    })
    .then(processedData => {
        return saveData(processedData);
    })
    .then(savedData => {
        console.log(savedData);
    })
    .catch(err => {
        console.error(err);
    });

console.log("hello");

//Advantages of Promises
// Readability: Promises improve code readability by avoiding deeply nested structures. The .then method allows chaining asynchronous operations in a linear sequence.
// Error Handling: Promises provide a unified way to handle errors using .catch, which can handle errors from any part of the promise chain.
// Chaining: Promises support chaining, allowing sequential execution of asynchronous tasks. Each .then returns a new promise, enabling a smooth flow of operations.
// Avoiding Callback Hell: Promises help avoid callback hell, making the code cleaner and easier to understand.
