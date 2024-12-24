"use strict";

// Example of async function
// Simulate a delay using a promise
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} // Async function to fetch data


function fetchData() {
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Fetching data...');
          _context.next = 3;
          return regeneratorRuntime.awrap(delay(2000));

        case 3:
          // Simulate a 2-second delay
          console.log('Data fetched!');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} // Call the async function


fetchData();