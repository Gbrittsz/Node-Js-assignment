const { response } = require('express');
const path = require('path');
const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.sendFile(path.join(__dirname+'/html/index.html'));

});

app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.sendFile(path.join(__dirname+'/html/about.html'));

});

app.get('/contact-me', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.sendFile(path.join(__dirname+'/html/contact-me.html'));

});

app.get('/404', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.sendFile(path.join(__dirname+'/html/404.html'));

});






app.listen(8080, () => console.log('Listening on port 8080'));

