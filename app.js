//clusting must to read
const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express World!');
});

app.get('/about', (req, res) => {
    res.send('Hello from About page');
})

app.listen(5000, () => {
    console.log('listing the port 5000');
});