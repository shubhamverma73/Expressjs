//clusting must to read
const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.write('<h1>Hello from Home page with write function</h1>');
    res.send();
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello from About page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Hello from Contact page</h1>');
});

app.get('/portfolio', (req, res) => {
    res.send('<h1>Hello from Portfolio page</h1>');
});

app.get('/json-send', (req, res) => {
    res.send([{id: 1, name: "Shubham"},{id: 2, name: null},{id: 3, name: undefined}]);
});

app.get('/json-json', (req, res) => {
    res.json([{id: 1, name: "Shubham"},{id: 2, name: null},{id: 3, name: undefined}]);
});

app.listen(5000, () => {
    console.log('listeing the port 5000');
});