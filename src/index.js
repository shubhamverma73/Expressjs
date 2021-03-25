const express = require('express');
var app = express();
//const path = require('path');

/* using HBS template enging  */
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index', {
        totalExp: '8+ Years'
    });
});

/* using normal html page call  */
//const staticPath = path.join(__dirname, '../public');
//app.use(express.static(staticPath));

app.listen(5000, () => {
    console.log('listeing the port 5000');
});