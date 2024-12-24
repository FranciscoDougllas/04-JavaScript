// Example of async function

// Simulate a delay using a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to fetch data
async function fetchData() {
    console.log('Fetching data...');
    await delay(2000); // Simulate a 2-second delay
    console.log('Data fetched!');
}

// Call the async function
fetchData();