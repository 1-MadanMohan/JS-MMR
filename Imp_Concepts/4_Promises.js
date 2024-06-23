//Basic Structure of a Promise
const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    if (/* operation is successful */ true) {
      resolve('Success!');
    } else {
      reject('Failure.');
    }
  });

//Creating and Using a Promise

const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulate success or failure
        if (success) {
          resolve('Operation was successful!');
        } else {
          reject('Operation failed.');
        }
      }, 1000); // 1 second delay
    });
  };
  
  asyncOperation()
    .then((message) => {
      console.log(message); // Log the success message
    })
    .catch((error) => {
      console.error(error); // Log the error message
    });


//Chaining Promises
const firstOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('First operation complete.');
      }, 1000);
    });
  };
  
  const secondOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Second operation complete.');
      }, 1000);
    });
  };
  
  firstOperation()
    .then((message) => {
      console.log(message);
      return secondOperation();
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  
  