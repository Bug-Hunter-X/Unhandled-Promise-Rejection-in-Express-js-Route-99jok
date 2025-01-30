const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error('Error in / route:', err);
      res.status(500).send('Something went wrong!'); // Send a proper error response
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}
