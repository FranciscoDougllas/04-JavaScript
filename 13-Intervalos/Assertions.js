// Assertions.js

// Example of using assertions in JavaScript

function add(a, b) {
    return a + b;
}

// Simple assertion function
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

// Test cases
try {
    assert(add(2, 3) === 5, "2 + 3 should equal 5");
    assert(add(-1, 1) === 0, "-1 + 1 should equal 0");
    assert(add(0, 0) === 0, "0 + 0 should equal 0");
    console.log("All tests passed!");
} catch (error) {
    console.error(error.message);
}