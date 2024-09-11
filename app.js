const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is a Node.js app Developed and deployed by Usman');
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});

