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

