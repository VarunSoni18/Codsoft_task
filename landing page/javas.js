const express = require('express');
const app = express();
const path = require('path');
// const hostname= 127.0 .0 . 1 ;
const port = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wildlife.html'));
});
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page1.html'));
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}/`);
});

