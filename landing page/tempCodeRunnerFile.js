const express = require('express');
const app = express();
const path = require('path');
// const hostname= 127.0 .0 . 1 ;
const port = 4000;

app.use(express.static('calculator'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator', 'intro.html'));
});
app.get('/base', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator', 'base.html'));
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}/`);
});
