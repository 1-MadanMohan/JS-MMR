// Note:In JavaScript, if you declare two functions with the same name within the same scope, the latter declaration will overwrite the former one.

function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

fetchData((result) => {
    console.log(result); // Output: Data fetched
});
// Detailed traditional code for this 👇
//Asynchronous Callbacks

function fetchData2(callback) {
    setTimeout(function() {
        callback('Data Fetched');
    }, 1000);
}

function handleResult(result) {
    console.log(result);
}

fetchData2(handleResult);


//Synchronous Callbacks- Doesnot go through event loop and callback queue

function processSynchronously(callback) {
    callback('Synchronous Data');
}

processSynchronously((result) => {
    console.log(result);
});
console.log("hello");


