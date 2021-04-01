const express = require('express');
var app = express();
const path = require('path');
const hbs = require('hbs');
var requests = require('requests');

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

app.get('/weather', (req, res) => {
    var city = req.query.name == '/' ? 'New Delhi' : req.query.name.replace('/', '');        
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=725ae9776c04b5f5511236fb804c623a&units=metric`)
    .on('data', (response) => {
        const jsonResponse = JSON.parse(response);
        const arrData = [jsonResponse];
        res.render('weather', {
            bodyPart: arrData[0]
        });
    })
    /*.on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);        
        res.end();
    });*/
});

app.get('*', (req, res) => {
    res.render('404');
});

/* using normal html page call  */
//const staticPath = path.join(__dirname, '../public');
//app.use(express.static(staticPath));

app.listen(5000, () => {
    console.log('listeing the port 5000');
});