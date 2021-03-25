const express = require('express');
var app = express();
const path = require('path');

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.listen(5000, () => {
    console.log('listeing the port 5000');
});