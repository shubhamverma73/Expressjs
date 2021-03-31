const express = require('express');
var app = express();
const path = require('path');
const hbs = require('hbs');

/* using HBS template enging  */
const templatePath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index', {
        totalExp: '8+ Years'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        bodyPart: 'The content of the About......'
    });
});

/* using normal html page call  */
//const staticPath = path.join(__dirname, '../public');
//app.use(express.static(staticPath));

app.listen(5000, () => {
    console.log('listeing the port 5000');
});