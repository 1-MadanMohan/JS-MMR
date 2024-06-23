//we know the traditional callback approach
// Promise approach abandons callback hell
//With async and await, the code becomes more readable and looks more like synchronous code:

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function handleData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

handleData();


