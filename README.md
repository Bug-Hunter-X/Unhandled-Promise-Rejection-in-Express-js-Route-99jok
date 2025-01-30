# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common but easily overlooked error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  When an asynchronous operation within a route throws an error and isn't properly caught, the server can crash without informative error messages.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides the corrected version with proper error handling. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Refresh the page several times.  Eventually, you will observe the server crashing (or, in some environments, encountering a silent failure) because of an unhandled promise rejection.

Now run `node bugSolution.js`. You should see error messages logged to the console, but the server will remain running.